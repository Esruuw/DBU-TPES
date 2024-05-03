// import React from 'react'
import './registration.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import {useNavigate} from 'react-router-dom'

// import React, { Component } from 'react';
import { useState } from "react";
import axios from "axios";
import API_URL from "../../config";

export default function RegistrationForm()
{
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
        navigate("/login");
      }
    } catch (err) { 
      if(err.response && err.response.status === 406){
        setError("DBU id should be valid")
       }  else   if(err.response && err.response.status === 404){
        setError("email already taken.")
       } else if (err.response && err.response.status === 400) {
       setError("please fill approprete input")
      }else if(err.response && err.response.status === 500){
        setError("internal server error");
      }else{
        setError("something went wrong");
      }
      // console.log(error);
    }
  };

return (
   <form onSubmit={ handleSubmit}>
   <div className='container'>
    <div className='header'>
       <div className='text'>Registration Form</div>
       <div className='underline'></div>
    </div>
    {error && (
          <div style={{ backgroundColor: "maroon", textAlign: "center" }}>
            {error}
          </div>
        )}
    <div className='inputs'>

      <div className='input'>
           <img src={user_icon} alt="" />
           <input 
            type="text"
            placeholder='Dbu Id...' 
            required
            name="dbuId"
            onChange={(e) => setDbuId(e.target.value)}            />
       </div>
{/* borderrrrrrrrrr*/}

       <div className='input'>
           <img src={email_icon} alt="" />
           <input type="email"
            placeholder='Email...' 
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            />
       </div> 

{/* borderrrrrrrrrr*/}
       <div className='input'>
           <img src={password_icon} alt="" />
           <input type="password" 
           placeholder='Password...'
           required
           name="password"
           onChange={(e) => setPassword(e.target.value)}
           />
       </div>
    </div>
    <div className='forgot-password'>Have An Account? {" "}
    <span>
     <a href="Login">
       Login
  </a>
     </span>
     </div>
    <div className='submit-container'>
       <div className='submit'>
         <button type="submit" className="reg-button">
         Register
         </button>
         </div>
       {/* <h2>Already Have An Account</h2>
       <div className='submit' to = "SignUpStudent.jsx">
           Login
            </div> */}

    </div>
   </div>
   </form>
 );
 }
 
