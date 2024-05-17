// In NextPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config";
import "./NextPage.css";
import { ThirdDetail } from "./ThirdDetail"; // Import ThirdDetail component

function HRM() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/evaluation/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
      }
    };
    getAllTeachers();
  }, []);

  return (
    <div className="teacher--list">
      {/* <div className="list--header">
        <h2>Teachers Result</h2>
        <a href="/third-detail">See Average</a>
      </div> */}
      {/* <table className="list--container">
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Student ID</th>
            <th>Performance</th>
            <th>Punctuality</th>
            <th>Subject Knowledge</th>
            <th>Assessment Method</th>
            <th>Interaction With Student</th>
            <th>Classroom Management</th>
            <th>Communication With Student</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td>{teacher.teacherId}</td>
              <td>{teacher.studentId}</td>
              <td>{teacher.performance}</td>
              <td>{teacher.punctuality}</td>
              <td>{teacher.subjectKnowledge}</td>
              <td>{teacher.assesmentMethod}</td>
              <td>{teacher.interactionWithStudent}</td>
              <td>{teacher.classRoomManagement}</td>
              <td>{teacher.communicationWithStudent}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <ThirdDetail teachers={teachers} /> Pass teachers data to ThirdDetail
    </div>
  );
}

export default HRM;
