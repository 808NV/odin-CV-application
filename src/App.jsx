import "./App.css";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Pdf from "./components/Pdf";
import { useState } from "react";
import { context } from "./context/Context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
function App() {
  const [storePersonal, setStorePersonal] = useState({});
  const [storeEducation, setStoreEducation] = useState({});
  const [storeExperience, setStoreExperience] = useState({});

  const downloadPdf = () => {
    const pdfElement = document.querySelector(".pdf");

    html2canvas(pdfElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="app">
      <Navbar />
      <context.Provider
        value={{
          storeEducation,
          setStoreEducation,
          storeExperience,
          setStoreExperience,
          storePersonal,
          setStorePersonal,
        }}
      >
         <div className="top-content">
          <Personal />
          <Education />
          <Experience />
        </div>
        <button className="download" onClick={downloadPdf}>
          Download as PDF
        </button>
        <div className="pdf-wrapper">
          <Pdf />
        </div>
      </context.Provider>
    </div>
  );
}

export default App;
