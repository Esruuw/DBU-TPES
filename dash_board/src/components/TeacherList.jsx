import React, { useEffect, useState } from "react";
import "../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../config";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

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
    // console.log('teacher id: ', teacherId)
    try {
      const response = await axios.delete(`${API_URL}/teacher/deleteById/${teacherId}`);
      if (response.status === 200) {
        setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
      }
    } catch (error) {
      // console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>List Of Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="oromo">Oromo</option>
        </select>
      </div>

      {/* Table structure */}
      <table className="teacher--table">
        <thead>
          <tr className="table--header">
            <th>Name</th>
            <th>Course</th>
            <th>Department</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through teachers */}
          {teachers.map((teacher) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
