import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../config";
import "./TeachersList.css";

const TeachersList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/teacher/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
        console.log(response.data);
      }
    };
    getAllTeachers();
  }, []);

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setCurrent("evaluationForm");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div id="teacher-list">
      <div id="list-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {teachers &&
              teachers.map((teacher) => (
                <tr
                  key={teacher._id}
                  onClick={() => handleTeacherClick(teacher)}
                >
                  <td>{teacher.name}</td>
                  <td>{teacher.course}</td>
                  <td>{teacher.department}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersList;
