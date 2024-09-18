import { useState } from "react";
import { read, utils } from "xlsx";
import { motion } from "framer-motion";

import { Analysis, ExcelUpload } from "../Components";

function Home() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const [firstSheetUploaded, setFirstSheetUploaded] = useState(false);
  const [firstFileName, setFirstFileName] = useState("");
  const [firstFileData, setFirstFileData] = useState(null);
  const handleFirstSheetUpload = async (file) => {
    if (file) {
      setFirstSheetUploaded(true);
      setFirstFileName(file.name);
      
      const data = await file.arrayBuffer();
      const workbook = read(data);
      
      const workSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(workSheet);
      
      //console.log(jsonData);
      setFirstFileData(jsonData);
    }
  };
  
  const [secondSheetUploaded, setSecondSheetUploaded] = useState(false);
  const [secondFileName, setSecondFileName] = useState("");
  const [secondFileData, setSecondFileData] = useState(null);
  const handleSecondSheetUpload = async (file) => {
    if (file) {
      setSecondSheetUploaded(true);
      setSecondFileName(file.name);

      const data = await file.arrayBuffer();
      const workbook = read(data);

      const workSheet = workbook.Sheets[workbook.SheetNames[0]];

      // Read the data as an array of arrays, where the first row is the headers, and subsequent rows are data
      const arrayData = utils.sheet_to_json(workSheet, {
        header: 1,
        defval: "",
      });

      // Separate the column names (headers) and the actual row data
      const colNames = arrayData[0]; // First row (headers)
      const rowData = arrayData.slice(1); // All rows except the first

      // Create an object with columns as keys and their respective entries as values
      const columnsData = colNames.reduce((acc, colName, index) => {
        acc[colName] = rowData.map((row) => row[index]); // Extract each column's data
        return acc;
      }, {});

      console.log(columnsData);
      setSecondFileData(columnsData);
    }
  };

  const handleAnalyzeClick = () => {
    if (firstFileData && secondFileData) {
      setShowAnalysis(true);
      setIsAnalyzing(true);
    } else {
      console.log("Please upload both files.");
    }
  };

  const handleAnalyzeOtherClick = () => {
    // Reset all states to allow new files to be uploaded
    setFirstSheetUploaded(false);
    setSecondSheetUploaded(false);
    setFirstFileName("");
    setSecondFileName("");
    setFirstFileData(null);
    setSecondFileData(null);
    setShowAnalysis(false);
    setIsAnalyzing(false); // Hide "Analyze Other" button and show "Analyze" button again
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center gap-2 py-6 text-center px-2">
        <h1 className="font-bold text-gray-700 text-2xl mb-2">
          Data Done Right - Upload, Analyze, Download
        </h1>

        <h3 className="font-semibold text-gray-600 text-md mb-4">
          Upload your Excel sheets, get instant results, and download insights
          in just a few clicks
        </h3>

        <motion.div
          className="relative"
          initial={{ x: 0 }}
          animate={{
            x: firstSheetUploaded ? -300 : 0,
            opacity: firstSheetUploaded ? 0 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          {!firstSheetUploaded && (
            <ExcelUpload
              heading={"Upload 1st Sheet"}
              onFileChange={handleFirstSheetUpload}
              sheetNo={1}
            />
          )}
        </motion.div>

        {firstFileName && (
          <p className="text-green-600 mt-2">
            Uploaded 1st File:{" "}
            <span className="font-semibold">{firstFileName}</span>
          </p>
        )}

        <motion.div
          className="relative"
          initial={{ x: 300 }}
          animate={{
            x: firstSheetUploaded ? 0 : 300,
            opacity: firstSheetUploaded ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {firstSheetUploaded && !secondSheetUploaded && (
            <ExcelUpload
              heading={"Upload 2nd Sheet"}
              onFileChange={handleSecondSheetUpload}
              sheetNo={2}
            />
          )}
        </motion.div>

        {secondFileName && (
          <p className="text-green-600">
            Uploaded 2nd File:{" "}
            <span className="font-semibold">{secondFileName}</span>
          </p>
        )}

        {!isAnalyzing && (
          <button
            className={`mt-4 bg-green-700 hover:bg-green-600 text-gray-100 px-5 py-3 rounded-lg transition-all ${
              !secondSheetUploaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!secondSheetUploaded}
            onClick={handleAnalyzeClick}
          >
            Analyze
          </button>
        )}

        {showAnalysis && (
          <Analysis
            file1Data={firstFileData}
            file2Data={secondFileData}
          />
        )}

        {isAnalyzing && (
          <button
            className="mt-4 text-green-700 hover:text-green-500 transition-all text-lg text-center"
            onClick={handleAnalyzeOtherClick}
          >
            Analyze Other &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
