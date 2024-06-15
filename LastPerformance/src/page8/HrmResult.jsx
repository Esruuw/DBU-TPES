import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './HrmResult.css';
import TeachersList from "../components/HRM/TeachersList";
import HrmDetailStudent from "../components/HRM/HrmDetailStudent";
import HrmDetailTeacher from "../components/HRM/HrmDetailTeacher";
import HrmDetailDept from "../components/HRM/HrmDetailDept";
import TeacherCriteria from "../components/chart/TeacherCriteria";

export default function HrmResult() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  const downloadPDF = () => {
    const input = document.getElementById('pdfContent');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Use navigate to redirect to the login page
  };

  return (
    <div id="pdfContent" className="page-container">
      <div className="fixed-header">
        <div className="firstText1">
          <h1>DEBRE BERHAN UNIVERSITY</h1>
          <div className="button-container">
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <button onClick={downloadPDF} className="download-btn">Download</button>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>
          {current && current === "evaluationForm" && (
            <button onClick={() => setCurrent("teacherList")} className="button-back">
              Back to Teacher List
            </button>
          )}
        </h3>

        {current && current === "teacherList" && (
          <TeachersList
            setCurrent={setCurrent}
            setSelectedTeacher={setSelectedTeacher}
          />
        )}

        {current && current === "evaluationForm" && (
          <>
            <HrmDetailStudent teacher={selectedTeacher} />
            {/* <TeacherCriteria/> */}
          </>
        )}

        {current && current === "evaluationForm" && (
          <HrmDetailTeacher teacher={selectedTeacher} />
        )}

        {current && current === "evaluationForm" && (
          <HrmDetailDept teacher={selectedTeacher} />
        )}
      </div>
    </div>
  );
}
