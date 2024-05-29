import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config";
import "./TeacherList.css";

const TeacherList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState([]);
  const [scheduleTime, setScheduleTime] = useState();
  const [updatedTeacherId, setUpdatedTeacherId] = useState();
  const navigate = useNavigate();

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
        setTeachers(response.data);
      }
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  const handleRowClick = (teacher) => {
    if (isToday(teacher.scheduleTime)) {
      setSelectedTeacher(teacher);
      setCurrent("evaluationForm");
    }
  };

  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div id="teacher-list">
      <div className="bothh">
        <div className="list--headerB">
          <a href="/teachers_form_peer">
            <h2>Evaluate Peer</h2>
          </a>
        </div>
        <div className="bothh2">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <table id="teacher-table">
        <thead>
          <tr id="table-header">
            <th>Name</th>
            <th>Course</th>
            <th>Department</th>
            <th>Schedule Time</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => {
            const scheduleDate = new Date(teacher.scheduleTime);
            const isFutureSchedule = scheduleDate > new Date();
            const isTodaySchedule = isToday(teacher.scheduleTime);

            if (isFutureSchedule || isTodaySchedule) {
              return (
                <tr
                  key={teacher._id}
                  onClick={() => handleRowClick(teacher)}
                  style={{ cursor: isTodaySchedule ? 'pointer' : 'default' }}
                >
                  <td>{teacher.name}</td>
                  <td>{teacher.course}</td>
                  <td>{teacher.department}</td>
                  <td>{teacher.scheduleTime}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
