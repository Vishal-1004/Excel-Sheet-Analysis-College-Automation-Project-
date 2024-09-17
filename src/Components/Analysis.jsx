import PropTypes from "prop-types";

const Analysis = ({ file1, file2, file1Data, file2Data }) => {
  return (
    <div>
      <h1>The files you have uploaded are:</h1>
      <p>
        {file1} & {file2}
      </p>

      <h2>First 5 values from {file1}:</h2>
      <ul>
        {Object.values(file1Data)
          .slice(0, 5)
          .map((value, index) => (
            <li key={index}>{JSON.stringify(value)}</li>
          ))}
      </ul>

      <h2>First 5 values from {file2}:</h2>
      <ul>
        {Object.values(file2Data)
          .slice(0, 5)
          .map((value, index) => (
            <li key={index}>{JSON.stringify(value)}</li>
          ))}
      </ul>
    </div>
  );
};

// Add prop validation
Analysis.propTypes = {
  file1: PropTypes.string.isRequired,
  file2: PropTypes.string.isRequired,
  file1Data: PropTypes.object.isRequired, // JSON data
  file2Data: PropTypes.object.isRequired, // JSON data
};

export default Analysis;
