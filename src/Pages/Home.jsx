import React, { useState } from 'react';
import { motion } from "framer-motion";

import { ExcelUpload } from "../Components";

function Home(){
  const [firstSheetUploaded, setFirstSheetUploaded] = useState(false);
  const [secondSheetUploaded, setSecondSheetUploaded] = useState(false);
  const [firstFileName, setFirstFileName] = useState('');
  const [secondFileName, setSecondFileName] = useState('');
  const [firstFile, setFirstFile] = useState(null);
  const [secondFile, setSecondFile] = useState(null);

  const handleFirstSheetUpload = (file) => {
    setFirstSheetUploaded(true);
    setFirstFileName(file.name);
    setFirstFile(file);
  };

  const handleSecondSheetUpload = (file) => {
    setSecondSheetUploaded(true);
    setSecondFileName(file.name);
    setSecondFile(file);
  };

  const handleAnalyzeClick = () => {
    if (firstFile && secondFile) {
      console.log("First File:", firstFile);
      console.log("Second File:", secondFile);
    } else {
      console.log("Please upload both files.");
    }
  };

  return(
    <div className="flex flex-col justify-center items-center gap-4 py-6 text-center px-2">
      <h1 className="font-bold text-gray-700 text-2xl mb-4">
        Data Done Right - Upload, Analyze, Download
      </h1>

      <h3 className="font-semibold text-gray-600 text-md mb-4">
        Upload your Excel sheets, get instant results, and download insights in just a few clicks
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
          />
        )}
      </motion.div>

      {firstFileName && (
        <p className="text-green-600 mt-2">
          Uploaded 1st File: <span className="font-semibold">{firstFileName}</span>
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
          />
        )}
      </motion.div>

      {secondFileName && (
        <p className="text-green-600 mt-2">
          Uploaded 2nd File: <span className="font-semibold">{secondFileName}</span>
        </p>
      )}

      <button
        className={`mt-4 bg-green-700 text-gray-100 px-5 py-3 rounded-lg transition-all ${
          !secondSheetUploaded ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!secondSheetUploaded}
        onClick={handleAnalyzeClick}
      >
        Analyze
      </button>
    </div>
  )
};

export default Home;
