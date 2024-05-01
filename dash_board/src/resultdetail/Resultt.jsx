import React, { useEffect, useState } from "react";
import axios from "axios";

import API_URL from "../config";
import "./Resultdetail.css";
import "../styles/TeacherList.css";

const Resultt = () => {
  const [teachers, setTeachers] = useState();
  const [evaluations, setEvaluations] = useState();
  const [selectedTeacherId, setSelectedTeacherId] = useState();

  const getTeacherEvaluation = async (teacherId) => {
    setSelectedTeacherId(teacherId);
    console.log("helllo ... ");
    try {
      const response = await axios.get(
        `${API_URL}/evaluation/findByTeacherId/${teacherId}`
      );
      if (response.status === 200) {
        setEvaluations(response.data);
      }
    } catch (e) {
      console.log("error1");
    }
  };

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await axios.get(`${API_URL}/teacher/findAll`);
        if (response.status === 200) {
          setTeachers(response.data);
        }
      } catch (e) {
        console.log("error2");
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
              onClick={() => getTeacherEvaluation(teacher._id)}
            >
              <div className="teacher--detail">
                <img src={teacher.image} alt={teacher.name} />
                <h2> {teacher.name} </h2>
              </div>
              <span className="spancourse"> {teacher.course} </span>
              <span className="spanother"> {teacher.department} </span>
              {evaluations && selectedTeacherId === evaluations[0].teacherId  && (
                <div>
                  <table>
                    <tr>
                      <th>performance</th>
                      <th>punctuality</th>
                      <th>feedback</th>
                      <th>subjectKnowledge</th>
                      <th>assesmentMethod</th>
                      <th>interactionWithStudent</th>
                      <th>classRoomManagement</th>
                      <th>communicationWithStudent</th>
                      <th>classRoom</th>
                      <th>comprehensiveFeedback</th>
                    </tr>

                    {evaluations.map((evaluation) => (
                      <tr>
                        <td>{evaluation.performance}</td>
                        <td>{evaluation.punctuality}</td>
                        <td>{evaluation.feedback}</td>
                        <td>{evaluation.subjectKnowledge}</td>
                        <td>{evaluation.assesmentMethod}</td>
                        <td>{evaluation.interactionWithStudent}</td>
                        <td>{evaluation.classRoomManagement}</td>
                        <td>{evaluation.communicationWithStudent}</td>
                        <td>{evaluation.classRoom}</td>
                        <td>{evaluation.comprehensiveFeedback}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Resultt;
