import React, { useEffect, useState } from "react";
import "../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../config";

const TeacherList = () => {
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/teacher/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
      }
    };
    getAllTeachers();
  }, [setTeachers]);


  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>List Of Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="oromo">Oromo</option>
        </select>
      </div>

      <div className="list--container">
        {teachers &&
          teachers.map((teacher) => (
            <div
              className="list"
              key={teacher._id} 
            >
              <div className="teacher--detail">
                <img src={teacher.image} alt={teacher.name} />
                <h2> {teacher.name} </h2>
              </div>
              <span className="spancourse"> {teacher.course} </span>
              <span className="spanother"> {teacher.department} </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeacherList;
