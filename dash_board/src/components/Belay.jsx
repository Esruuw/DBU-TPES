import React, { useEffect, useState } from "react";
import "../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../config";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [scheduleTime, setScheduleTime] = useState();
  const [updatedTeacherId, setUpdatedTeacherId] = useState();

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await axios.get(`${API_URL}/teacher/findAll`);
        if (response.status === 200) {
          setTeachers(response.data);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    getAllTeachers();
  }, []);

  const handleDeleteTeacher = async (teacherId) => {
    try {
      const response = await axios.delete(
        `${API_URL}/teacher/deleteById/${teacherId}`
      );
      if (response.status === 200) {
        setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleScheduleChange = (teacherId, event) => {
    setUpdatedTeacherId(teacherId);
    setScheduleTime(event.target.value);
  };

  const handleScheduleSubmit = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/teacher/updateById/${updatedTeacherId}`,
        { scheduleTime }
      );
      if (response.status === 200) {
        // console.log('first, updated.........')
        setTeachers(response.data);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  }; 

  return (
    <div id="teacher-list">
      <div id="list-header">
        <h2>List Of Teachers</h2>
      </div>

      {/* Table structure */}
      <table id="teacher-table">
        <thead>
          <tr id="table-header">
            <th>Name</th>
            <th>Course</th>
            <th>Department</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Action</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through teachers */}
          {teachers.map(
            (teacher) =>
              teacher.scheduleTime &&
              new Date(teacher.scheduleTime) > new Date() && (
                <tr key={teacher._id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.course}</td>
                  <td>{teacher.department}</td>
                  <td>{teacher.year}</td>
                  <td>{teacher.semester}</td>
                  <td>
                    <button onClick={() => handleDeleteTeacher(teacher._id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <div className="schedule-container">
                      {teacher.scheduleTime} 
                    </div>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
