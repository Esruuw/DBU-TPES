import React, { useEffect, useState } from "react";
import "../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../config";

const SecondSemester = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await axios.get(`${API_URL}/teacher/findAll`);
        if (response.status === 200) {
          setTeachers(response.data);
          // Filter teachers by semester "Second"
          const secondSemester = response.data.filter(
            (teacher) => teacher.semester === "Second"
          );
          setFilteredTeachers(secondSemester);
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
        // Update teachers and filteredTeachers after deletion
        const updatedTeachers = teachers.filter(
          (teacher) => teacher._id !== teacherId
        );
        setTeachers(updatedTeachers);
        const updatedFilteredTeachers = updatedTeachers.filter(
          (teacher) => teacher.semester === "Second"
        );
        setFilteredTeachers(updatedFilteredTeachers);
      }
    } catch (error) {
      console.error("Error deleting teacher:", error);
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
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered teachers */}
          {filteredTeachers.map((teacher) => (
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

export default SecondSemester;
