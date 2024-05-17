import React, { useState } from "react";
import axios from "axios";
import "./AddCriteria.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
// import {useNavigate, Link} from "react-router-dom"
// import axios from 'axios';
// import React, {useEffect, useState} from "react";
import password_icon from "../assets/password.png";
import API_URL from "../config";

const AddCriteria = () => {
  const [standard_criteria, setStandard_criteria] = useState("");
//   const [course, setCourse] = useState("");
//   const [department, setDepartment] = useState("");
//   const [teacherId, setTeacherId] = useState("");
//   const [year, setyear] = useState("");
//   const [semester, setsemester] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/criteria/createOne`, {
        standard_criteria,
      });
      if (response.status === 201) {
        setError("criteria added successfully.");
      }
    } catch (err) {
      if (err.response && err.response.status === 406) {
        setError("criteria should be unique");
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
          <div className="text">Criteria Registration</div>
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
              value={standard_criteria}
              onChange={(e) => setStandard_criteria(e.target.value)}
              placeholder="criteria..."
            />
          </div>


        

     
       

      
        </div>

        <div className="submit-container">
          <div className="submit">
            <button type="submit" className="reg-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddCriteria;
