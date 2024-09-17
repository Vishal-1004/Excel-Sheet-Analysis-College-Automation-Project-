import { useState } from "react";
import { read, utils } from "xlsx";

const ExcelUpload = ({ heading, onFileChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);

      const data = await file.arrayBuffer();
      const workbook = read(data);

      const workSheet = workbook.Sheets[workbook.SheetNames[0]];

      // Convert sheet to JSON and fetch the headers
      const jsonData = utils.sheet_to_json(workSheet, {
        header: 1,
        defval: "",
      });
      const headers = jsonData[0]; // First row contains the headers

      // Check for required headers
      const hasRegistrationNumber = headers.includes("Registration Number");
      const hasQuestionNumber = headers.includes("Question Number");

      if (hasRegistrationNumber && hasQuestionNumber) {
        console.log("Both headers found:", headers);
      } else {
        console.log("Missing headers. Found headers:", headers);
      }

      onFileChange(file);
    }
  };

  return (
    <div className="border-2 mt-4 border-gray-300 p-5 rounded-lg text-center w-[90vw] sm:w-1/2 md:w-2/3 md:h-[220px] mx-auto ">
      <h2 className="text-xl font-semibold mb-4">{heading}</h2>

      <div className="relative inline-block w-full">
        <input
          type="file"
          accept=".xls,.xlsx"
          onChange={handleFileChange}
          className="hidden"
          id={`file-upload-${heading}`}
        />
        <label
          htmlFor={`file-upload-${heading}`}
          className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-md p-4 hover:bg-gray-100 transition"
        >
          Browse the Excel files you want to upload from your computer or drag
          and drop
          <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mt-2 mx-auto">
            +
          </div>
        </label>
      </div>
    </div>
  );
};

export default ExcelUpload;
