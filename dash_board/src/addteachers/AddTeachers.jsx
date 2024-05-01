import React, { useState } from "react";
import axios from "axios";
import "./AddTeachers.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
// import {useNavigate, Link} from "react-router-dom"
// import axios from 'axios';
// import React, {useEffect, useState} from "react";
import password_icon from "../assets/password.png";
import API_URL from "../config";

const AddTeachers = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/teacher/createOne`, {
        teacherId,
        name,
        course,
        department,
      });
      if (response.status === 201) {
        setError("teacher added successfully.");
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
            <div style={{ padding: 5, backgroundColor: "red" }}>{error}</div>
          )}
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              placeholder="Teacher id..."
            />
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Teachers Name..."
            />
          </div>
          {/* borderrrrrrrrrr*/}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Course..."
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="department..."
            />
          </div>
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
export default AddTeachers;
