import React, { useState } from "react";
import "./TeacherP.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TeachersList from "../components/TeachersPage/TeachersList";
import ThreePage from "../components/TeachersPage/ThreePage";
import TeachersPage from "../components/TeachersPage/teacherspage";
import TeachersFormResult from "../components/TeachersFormResult/TeachersFormResult";
import DeptResult from "../components/DeptResult/DeptResult";
import HrmDetailStudent from "../components/HRM/HrmDetailStudent";
import HrmDetailTeacher from "../components/HRM/HrmDetailTeacher";
import HrmDetailDept from "../components/HRM/HrmDetailDept";

export default function TeacherP() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const [evaluationView, setEvaluationView] = useState(null);

  const downloadPDF = () => {
    const input = document.getElementById('pdfContent');
    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      });
    } else {
      console.error('Element with ID pdfContent not found.');
    }
  };

  return (
    <div>
      <div className="fixed-header">
        <div className="firstText1">
          <h1>DEBRE BERHAN UNIVERSITY</h1>
          <button className="download-btn" onClick={downloadPDF}>Download</button>
        </div>
      </div>
      <div id="pdfContent" className="content">
        <h3>
          {current === "evaluationForm" && !evaluationView && (
            <button className="buttonn" onClick={() => setCurrent("teacherList")}>
              Back to teacher list
            </button>
          )}
          {evaluationView && (
            <button className="buttonn" onClick={() => setEvaluationView(null)}>
              Back to evaluation form
            </button>
          )}
        </h3>

        {current === "teacherList" && (
          <TeachersList
            setCurrent={setCurrent}
            setSelectedTeacher={setSelectedTeacher}
          />
        )}

        {current === "evaluationForm" && !evaluationView && (
          <ThreePage setEvaluationView={setEvaluationView} />
        )}
        
        {evaluationView === "studentResult" && (
          <TeachersPage teacher={selectedTeacher} />
        )}

        {evaluationView === "peerResult" && (
          <TeachersFormResult teacher={selectedTeacher} />
        )}

        {evaluationView === "departmentResult" && (
          <DeptResult teacher={selectedTeacher} />
        )}

        {evaluationView === "totalResult" && (
          <>
            <HrmDetailStudent teacher={selectedTeacher} />
            <HrmDetailTeacher teacher={selectedTeacher} />
            <HrmDetailDept teacher={selectedTeacher} />
          </>
        )}
      </div>
    </div>
  );
}
