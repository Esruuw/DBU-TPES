import React, { useState } from "react";

import './TeacherP.css';
import TeachersList from "../components/TeachersPage/TeachersList";
import TeachersPage from "../components/TeachersPage/teacherspage";
export default function TeacherP() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();

  return (
    <div> 
       <div className="firstText1">
          <h1>DEBRE BERHAN UNIVERSITY</h1>
          <h2>Teachers Performance Evaluation Form</h2> 
        </div>
        <h3> 
          <h4>select One of Teacher to see Evaluation Result!</h4>
        
        {current && current === "evaluationForm" &&(

        <button className="buttonn" onClick={()=>setCurrent("teacherList")} >back to teacher list</button>
        )}
        </h3>

      {current && current === "teacherList" && (
        <TeachersList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

      {current && current === "evaluationForm" && (
        <TeachersPage teacher={selectedTeacher} /> 
      )}
    </div>
  );
}
