import React, { useState } from "react";
import axios from "axios";
import "./AddStudent.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
// import {useNavigate, Link} from "react-router-dom"
// import axios from 'axios';
// import React, {useEffect, useState} from "react";
import password_icon from "../assets/password.png";
import API_URL from "../config";

const AddStudents = () => {
  const [dbuId, setDbuId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  // const [department, setDepartment] = useState("");
  // const [semister, setSemister] = useState("");
  // const [year, setYear] = useState("");

  // const [studentId, setStudentId] = useState("");
  // const [year, setyear] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/sims/createOne`, {
        dbuId,
        name,
        role,
        // department,
        // semister,
        // year,
      });
      if (response.status === 201) {
        setError("student added successfully.");
      }
    } catch (err) {
      if (err.response && err.response.status === 406) {
        setError("id should be unique");
      } else if (err.response && err.response.status === 400) {
        setError("please fill appropriate input");
      } else {
        setError("something went wrong");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="header">
          <div className="text">Register Teachers</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {error && (
            <div style={{ padding: 5, backgroundColor: "#e78c8c", margin: 20, textAlign: 'center', fontSize: 24 }}>{error}</div>
          )}
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={dbuId}
              onChange={(e) => setDbuId(e.target.value)}
              placeholder="Student id..."
            />
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Students Name..."
            />
          </div>
          {/* borderrrrrrrrrr*/}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="role..."
            />
          </div>

          {/* <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="department..."
            />
          </div> */}

{/*           
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={semister}
              onChange={(e) => setSemister(e.target.value)}
              placeholder="semister..."
            />
          </div> */}
{/* 
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="year..."
            />
          </div> */}
          {/* <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="department..."
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={year}
              onChange={(e) => setyear(e.target.value)}
              placeholder="year..."
            />
          </div> */}
        </div>

        <div className="submit-container">
          <div className="submit">
            <button type="submit" className="reg-button">
              Registerr
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddStudents;
