import PropTypes from "prop-types";

const processData = (file1Data, file2Data) => {
  const questionNumbers = file2Data["Question Number"];
  const registrationNumbers = file2Data["Registration Number"];

  // Create the result array where each entry will be an object containing registration number and marks for each question
  const result = registrationNumbers
    .filter((regNo) => regNo !== "") // Skip empty registration numbers
    .map((regNo) => {
      const row = { "Registration Number": regNo };
      let totalMarks = 0;

      // For each question number in file2Data, find the corresponding marks from file1Data
      questionNumbers.forEach((questionNum) => {
        const record = file1Data.find(
          (entry) =>
            entry["Registration Number"] === regNo &&
            entry["Question Number"] === questionNum
        );

        // Store the marks or "N/A" if no record is found, and add to total if valid marks are found
        const marks = record ? record["Marks"] : "N/A";
        row[questionNum] = marks;
        if (marks !== "N/A") totalMarks += marks;
      });

      // Add the total marks for each student
      row["Total Marks"] = totalMarks;
      return row;
    });

  return { questionNumbers, result };
};

const Analysis = ({ file1, file2, file1Data, file2Data }) => {
  const { questionNumbers, result } = processData(file1Data, file2Data);

  return (
    <div>
      <h1>The files you have uploaded are:</h1>
      <p>
        {file1} & {file2}
      </p>

      {/* Display the table */}
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th rowSpan="2">Registration Number</th>
            <th colSpan={questionNumbers.length}>Question</th>
            <th rowSpan="2">Total Marks</th>
          </tr>
          <tr>
            {questionNumbers.map((qNum, index) => (
              <th key={index}>{qNum}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row["Registration Number"]}</td>
              {questionNumbers.map((qNum, colIndex) => (
                <td key={colIndex}>{row[qNum]}</td>
              ))}
              <td>{row["Total Marks"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add prop validation
Analysis.propTypes = {
  file1: PropTypes.string.isRequired,
  file2: PropTypes.string.isRequired,
  file1Data: PropTypes.array.isRequired, // JSON data array from file1
  file2Data: PropTypes.object.isRequired, // JSON data object from file2
};

export default Analysis;
