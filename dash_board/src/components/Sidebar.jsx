// import React from 'react'
// import {
//     BiHome, 
//     BiBookAlt, 
//     BiMessage,
//     BiSolidReport,
//     BiStats,
//     BiTask,
//     BiHelpCircle,
    
//      } from 'react-icons/bi';
// import '../styles/Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className='menu'>
//       <div className="logo">
//         <BiBookAlt className='logo-icon'/>
//         <h2>My_Dashboard</h2>
//         </div>  


//         <div className="menu--list">
//             <a href="Resultt" className='item activate'>
//             <BiTask className='icon'/>
//              Result
//             </a>

//             <a href="AddTeachers" className='item'>
//             <BiSolidReport  className='icon'/>
//            Add Teachers
//             </a>

//             <a href="#" className='item'>
//             <BiStats  className='icon'/>
//             Message
//             </a>

//             <a href="#" className='item'>
//             <BiMessage  className='icon'/>
//             Help
//             </a>

//             <a href="#" className='item'>
//             <BiHelpCircle  className='icon'/>
//             Logout
//             </a>
//         </div>
//     </div>
//   )
// }

// export default Sidebar
import React, { Component } from 'react';
import Contentheader from './Contentheader';
import Card from './Card';
import Profile from './Profile';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';
import TeacherList from './TeacherList';
import '../styles/Content.css';
import Content from'./Content';
import {BiHelpCircle, } from 'react-icons/bi';
import {
    BiHome, 
    BiBookAlt, 
    BiMessage,
    BiSolidReport,
    BiStats,
    BiTask,
    
    
     } from 'react-icons/bi';
export default class Sidebar extends Component
{
  componentDidMount()
  {
    fetch("http://localhost:3000/userData",
    {
      method: "POST",
      crossDomain: true,
      headers:
      {
        "Content-Type" : "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
      body:JSON.stringify(
        {
          token: window.localStorage.getItem("token"),
        }),

    })
    .then((res)=> res.json())
    .then((data) =>
    {
      console.log(data, "userData");
    });
  }
  logout=()=>
  {
window.localStorage.clear();
window.location.href="./login"
  }
render()
{
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className='logo-icon'/>
        <h2>My_Dashboard</h2>
        </div>  


        <div className="menu--list">
        <a href="/" className='item activate'>
            <BiTask className='icon'/>
             Main
            </a>

            <a href="Resultt" className='item activate'>
            <BiTask className='icon'/>
             Result
            </a>

            <Link to="/addteachers" className='item'>
             <BiSolidReport  className='icon'/>
             Add T
            </Link>

            <a href="#" className='item'>
            <BiStats  className='icon'/>
            Message
            </a>

            <a href="#" className='item'>
            <BiMessage  className='icon'/>
            Help
            </a>

            <a href="#" className='item'>
            <BiHelpCircle  className='icon'/>
            <button onClick={this.logout}  className='logoutt'>Logout</button>    
            </a>
        </div>
    </div>
  )
}
}
