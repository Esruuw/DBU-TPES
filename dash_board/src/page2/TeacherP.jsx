import React, { useState } from "react";
import "./TeacherP.css";
import TeachersList from "../ResultDetail3/TeachersList";
import ThreePage from "../ResultDetail3/ThreePage";
import TeachersPage from "../ResultDetail3/teacherspage";
import TeachersFormResult from "../TeachersFormResult/TeachersFormResult";
import DeptResult from "../DeptFormR/DeptResult";
import HrmDetailDept from "../ResultDetail3/HrmDetailDept";
import HrmDetailTeacher from "../ResultDetail3/HrmDetailTeacher";
import HrmDetailStudent from "../ResultDetail3/HrmDetailStudent";


export default function TeacherP() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const [evaluationView, setEvaluationView] = useState(null);

  return (
    <div>
      
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
  );
}
