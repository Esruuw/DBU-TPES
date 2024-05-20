import React, { useState } from "react";
import NextPage from "../components/TeachersForm/TeacherList";
// import "./AllOne.css"
import TeachersList from "../components/DeptResult/TeachersList";
import DeptResult from "../components/DeptResult/DeptResult";
// import TeacherList from "../components/studentform/TeacherList";
// import Teacherform from "../components/TeachersForm/teacherform";
// import NextPage from "../components/TeachersPage/NextPage";
// import ThirdDetail  from "./TeachersPage/ThirdDetail";

export default function DeptResultPage() {
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
        <TeachersList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

      {current && current === "evaluationForm" && (
        <DeptResult teacher={selectedTeacher} /> 
      )}
    </div>
  );
}


