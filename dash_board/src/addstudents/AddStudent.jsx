import React, { useState } from "react";
import axios from "axios";
import "./AddStudent.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import API_URL from "../config";

const AddStudents = () => {
  const [dbuId, setDbuId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/sims/createOne`, {
        dbuId,
        name,
        email,
        role,
      });
      if (response.status === 201) {
        setError("Participant added successfully.");
      }
    } catch (err) {
      if (err.response && err.response.status === 406) {
        setError("ID should be unique");
      } else if (err.response && err.response.status === 400) {
        setError("Please fill appropriate input");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="containerAddT">
        <div id="header">
          <div id="text">Register Participants</div>
          <div id="underline"></div>
        </div>
        <div id="inputs">
          {error && (
            <div id="error">{error}</div>
          )}
          <div id="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={dbuId}
              onChange={(e) => setDbuId(e.target.value)}
              placeholder="Participant ID..."
            />
          </div>
          <div id="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Participant Name..."
            />
          </div>

          <div id="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Participant Email..."
            />
          </div>
          <div id="input">
      <img src={email_icon} alt="" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="" disabled selected>
          Role...
        </option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
        <option value="hrm">HRM</option>
      </select>
    </div>
        </div>
        <div id="submit-container">
          <div id="submit">
            <button type="submit" id="reg-button">
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddStudents;
