import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import API_URL from "../../config";
import "./TeacherList.css";

const TeachersList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/teacher/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
        console.log(response.data);
      }
    };
    getAllTeachers();
  }, []);

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setCurrent("evaluationForm");
  };

  const handleLogout = () => {
    // Clear authentication tokens or session data
    localStorage.removeItem("token"); // or any other storage used

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="teacher--listB">
      <div className="bothh">
        <div className="bothh2">
        <h4 
  onClick={handleLogout} 
  style={{ 
    cursor: "pointer", 
    marginLeft: "1600px", // Adjust margin-left as needed
    width: "100px", // Adjust width as needed
    height: "50px", // Adjust height as needed
    backgroundColor: "#f0f0f0", // Adjust background color as needed
    border: "1px solid #ccc", // Adjust border as needed
    borderRadius: "5px", // Adjust border-radius as needed
    textAlign: "center",     
  }}
>
  Logout
</h4>

        </div>
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
                  onClick={() => handleTeacherClick(teacher)}>
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
