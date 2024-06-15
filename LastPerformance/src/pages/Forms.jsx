import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherList from "../components/studentform/TeacherList";
import './Forms.css';
import Studentform from "../components/studentform/studentform";

export default function Forms() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div className="firstText1">
        <h1>DEBRE BERHAN UNIVERSITY</h1>
        <div className="button-container">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <h3>
        {current && current === "evaluationForm" && (
          <button onClick={() => setCurrent("teacherList")}>Back to Teacher List</button>
        )}
      </h3>

      {current && current === "teacherList" && (
        <TeacherList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

      {current && current === "evaluationForm" && (
        <Studentform teacher={selectedTeacher} />
      )}
    </div>
  );
}
