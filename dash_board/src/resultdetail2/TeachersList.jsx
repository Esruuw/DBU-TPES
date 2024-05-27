import React, { useEffect, useState } from "react";
import "./TeachersList.css";
import axios from "axios";
import API_URL from "../config";

const TeachersList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/teacher/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
        console.log(response.data);
      }
    };
    getAllTeachers();
  }, [setTeachers]);

  const handleNewEvaluation = (selectedTeacher) => {
    setSelectedTeacher(selectedTeacher);
    setCurrent("evaluationForm");
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>List Of Teachers</h2>
    
      </div>

      <div className="list--containerB">
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
                  onClick={() => handleNewEvaluation(teacher)}
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
