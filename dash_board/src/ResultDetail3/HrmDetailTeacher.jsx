import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../config";
// import "./HrmDetailTeacher.css";
// import {  ThirdDetailStudent } from "./ThirdDetailStudent"; // Import ThirdDetail component
import { ThirdDetailTeacher } from "./ThirdDetailTeacher";

function HrmDetailTeacher({ teacher }) {
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const getAllEvaluations = async () => {
      try {
        const response = await axios.get(`${API_URL}/teacherevaluation/findManyByTeacherId/${teacher && teacher.teacherId}`);
        if (response.status === 200) {
          setEvaluations(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllEvaluations();
  }, [teacher]);

  return (
    <div className="evaluation--list">
      <div className="list--header">
        {/* <h2>Evaluations Result</h2>
        <a href="/third-detail">See Average</a> */}
      </div>
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
            <th>Time Management</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.map((evaluation) => (
            <tr key={evaluation._id}>
              <td>{evaluation.teacherId}</td>
              <td>{evaluation.studentId}</td>
              <td>{evaluation.performance}</td>
              <td>{evaluation.punctuality}</td>
              <td>{evaluation.subjectKnowledge}</td>
              <td>{evaluation.assesmentMethod}</td>
              <td>{evaluation.interactionWithStudent}</td>
              <td>{evaluation.classRoomManagement}</td>
              <td>{evaluation.timeManagement}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <div className="feedback--section">
        {evaluations.map((evaluation) => (
          <div key={evaluation._id} className="feedback--container">
            <div className="feedback--box">
              <h3>Positive Feedback</h3>
              <td>{evaluation.studentId}</td>
              <p>{evaluation.feedback}</p>
            </div>
            <div className="feedback--box">
              <h3>Negative Feedback</h3>
              <td>{evaluation.studentId}</td>
              <p>{evaluation.comprehensiveFeedback}</p>
            </div>
          </div>
        ))}
      </div> */}
      <ThirdDetailTeacher evaluations={evaluations} />
    </div>
  );
}

export default HrmDetailTeacher;

