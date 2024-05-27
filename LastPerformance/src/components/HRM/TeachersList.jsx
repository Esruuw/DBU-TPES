import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import axios from "axios";
import API_URL from "../../config";
import "./TeachersList.css";

const TeachersList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState();
  const navigate = useNavigate(); // Updated to useNavigate

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
    navigate("/login"); // Updated to use navigate
  };

  return (
    <div className="teacher--listB">
      <div className="bothh">
        {/* <div className="list--headerB">
          <a href="/teachers_form_peer">
            <h2>Evaluate Peer</h2>
          </a>
        </div> */}
        <div className="bothh2">
        <button onClick={handleLogout}>Logout</button> {/* Add logout button */}

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
                  onClick={() => handleTeacherClick(teacher)}
                >
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
