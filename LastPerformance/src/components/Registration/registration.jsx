import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./registration.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import API_URL from "../../config";

export default function RegistrationForm() {
  const [dbuId, setDbuId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        dbuId,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Succesfully Registered ")
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.status === 406) {
        setError("DBU id should be valid");
      } else if (err.response && err.response.status === 404) {
        setError("email already taken.");
      } else if (err.response && err.response.status === 400) {
        setError("please fill appropriate input");
      } else if (err.response && err.response.status === 500) {
        setError("internal server error");
      } else {
        setError("something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="containerReg">
        <div id="headerReg">
          <div id="text">Registration Form</div>
          <div id="underline"></div>
        </div>
        {error && (
            <div style={{ padding: 5, backgroundColor: "#e78c8c", margin: 20, textAlign: 'center', fontSize: 24 }}>{error}</div>
          )}

        <div id="inputsReg">
          <div id="inputReg">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Dbu Id..."
              required
              name="dbuId"
              onChange={(e) => setDbuId(e.target.value)}
            />
          </div>

          <div id="inputReg">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email..."
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div id="inputReg">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password..."
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div id="forgot-password">
          Have An Account?{" "}
          <span>
            <a href="Login">Login</a>
          </span>
        </div>
        <div id="submit-container">
          <div id="submit">
            <button type="submit" className="reg-button">
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
