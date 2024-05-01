import React, {  useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import API_URL from '../config';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      }); 
      if (response.status === 200) { 
        const userFound = response.data; 
        localStorage.setItem("token", userFound.token);

        console.log(response.data)
        if(userFound.user.role === "admin"){
        // setError("Successfully logged in");
        navigate('/');
        }else if (userFound.user.role === "student"){
          // navigate('/mm');
          alert("only admins can access this page");
        }
      }
    } catch (err) {
      if(err.response && err.response.status === 400){
        setError("email and password should not be null")
       }  else   if(err.response && err.response.status === 404){
        setError("This email is not registered.")
       } else if (err.response && err.response.status === 403) {
       setError("email or password incorrect")
      }else if(err.response && err.response.status === 500){
        setError("internal server error");
      }else{
        setError("something went wrong");
      }
    } 
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='container'>
          <div className='header'>
            <div className='text'>Login Page</div>
            <div className='underline'></div>
          </div>
          {error && (
          <div style={{ backgroundColor: "maroon", textAlign: "center" }}>
            {error}
          </div>
        )}
          <div className='inputs'>
            <div className='input'>
              <img src={email_icon} alt="logo" />
              <input
                type="email"
                placeholder='Email...'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder='Password...'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='forgot-password'>Lost Password? <span href="RegistrationForm">Click Here!</span></div>
          <div className='submit-container'>
            <div className='submit'>
              <button type="submit" className="reg-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    )
}
