import PropTypes from "prop-types";
import * as XLSX from "xlsx";

const processData = (file1Data, file2Data) => {
  const questionNumbers = file2Data["Question Number"];
  const registrationNumbers = file2Data["Registration Number"];

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

        const marks = record ? record["Marks"] : "N/A";
        row[questionNum] = marks;
        if (marks !== "N/A") totalMarks += marks;
      });

      row["Total Marks"] = totalMarks;
      return row;
    });

  return { questionNumbers, result };
};

const Analysis = ({ file1Data, file2Data }) => {
  const { questionNumbers, result } = processData(file1Data, file2Data);

  const downloadExcel = () => {
    // Create worksheet data with registration number first, then questions, then total marks
    const worksheetData = result.map((row) => ({
      "Registration Number": row["Registration Number"], // First column
      ...questionNumbers.reduce((acc, qNum) => {
        acc[qNum] = row[qNum];
        return acc;
      }, {}),
      "Total Marks": row["Total Marks"], // Last column
    }));

    // Create a new worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

    // Download the Excel file
    XLSX.writeFile(workbook, "student_results.xlsx");
  };

  return (
    <div>
      {/* Display the table */}
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th rowSpan="2">Registration Number</th> {/* Registration first */}
            <th colSpan={questionNumbers.length}>Question</th>
            <th rowSpan="2">Total Marks</th> {/* Total marks last */}
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

      {/* Download button */}
      <button 
        className="mt-4 bg-green-700 hover:bg-green-600 text-gray-100 px-5 py-3 rounded-lg transition-all"
        onClick={downloadExcel}
      >
        Download as Excel
      </button>
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
