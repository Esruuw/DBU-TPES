import React, { useEffect, useState } from "react";
// import "../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../config";
import './StudentsList.css'
const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("useffect");
    const getAllStudents = async () => {
      try {
        const response = await axios.get(`${API_URL}/sims/findAll`);
        if (response.status === 200) {
          console.log("insidfe", response.data);
          setStudents(response.data);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    getAllStudents();
  }, []);

  const handleDeleteStudent = async (studentId) => {
    // console.log('teacher id: ', teacherId)
    try {
      const response = await axios.delete(
        `${API_URL}/sims/deleteById/${studentId}`
      );
      if (response.status === 200) {
        setStudents(students.filter((student) => student._id !== studentId));
      }
    } catch (error) {
      // console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>List Of Participants</h2>
    
      </div>

      {/* Table structure */}
      <table className="teacher--table">
        <thead>
          <tr className="table--header">
             <th>Evaluation_Id</th>
             <th>Name</th>
             <th>Email</th>
            <th>Role</th>
            <th>Action</th>
            
            {/* <th>Semester</th>
            <th>Department</th> */}
          </tr>
        </thead>
        <tbody>
          {/* Map through teachers */}
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.dbuId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>

              <td>{student.role}</td>
              {/* <td>{student.department}</td>
              <td>{student.semister}</td>
              <td>{student.year}</td> */}
              {/* <td>{teacher.department}</td>
              <td>{teacher.year}</td>
              <td>{teacher.semester}</td> */}
              <td>
                <button onClick={() => handleDeleteStudent(student._id)}>
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

export default StudentsList;
