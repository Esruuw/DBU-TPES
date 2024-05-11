import React, { useState } from "react";
import TeacherList from "../components/studentform/TeacherList";
import './DashbResult.css';
import NextPage from "../components/TeachersPage/NextPage";
import { ThirdDetail } from "../components/TeachersPage/ThirdDetail";

export default function DashbResult() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();

  return (
    <div>
       <div className="firstText1">
          <h1>DEBRE BERHAN UNIVERSITY</h1>
          {/* <h2>Teachers Performance Evaluation Form</h2> */}
          {/* <h2>WELL COME TO TEACHER EVALUATION FORM</h2> */}
        </div>
        <h3> 
        {current && current === "evaluationForm" &&(

        <button onClick={()=>setCurrent("teacherList")}>back to teacher list</button>
        )}
        </h3>

      {current && current === "teacherList" && (
        <TeacherList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

      {current && current === "evaluationForm" && (
        <NextPage teacher={selectedTeacher} /> 
      )}
    </div>
  );
}


