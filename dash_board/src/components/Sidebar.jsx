// Sidebar.js
import React, { Component } from "react";
import {
  BiBookAlt,
  BiTask,
  BiSolidReport,
  BiStats,
  BiMessage,
  BiHelpCircle,
} from "react-icons/bi";
import "../styles/Sidebar.css";
import dbu from "../assets/dbsss.jpg";
export default class Sidebar extends Component {
  logout = () => {
    window.localStorage.clear();
    window.location.href = "./loginPage";
  };

  render() {
    const { setContent } = this.props;
    // console.log(localStorage.getItem("token"), 'token');

    const user = {
      name: "John Doe",
      role: "superAdmin",
    };

    return (
      <div className="menu">
        <div className="logo">
          <img src={dbu} alt="" width={70} height={50} />
          <h2>DBU-TPES Admin Dashboard</h2>
        </div>
        <div className="menu--list">
          <a
            href="#"
            className="item activate"
            onClick={() => setContent("Main")}
          >
            <BiTask className="icon" />
            Main
          </a>
          {/* <a href="#" className='item activate' onClick={() => setContent('Result')}>
            <BiTask className='icon' />
            Result
          </a> */}

          {/* {user.role === "superAdmin" && (
            <a
              href="#"
              className="item"
              onClick={() => setContent("AddTeacher")}
            >
              <BiSolidReport className="icon" />
              Department Admins{" "}
            </a>
          )} */}

          <a href="#" className="item" onClick={() => setContent("AddTeacher")}>
            <BiSolidReport className="icon" />
            Add Teacher
          </a>

          <a
            href="#"
            className="item"
            onClick={() => setContent("AddParticipants")}
          >
            <BiStats className="icon" />
            Add Participants
          </a>
          <a
            href="#"
            className="item"
            onClick={() => setContent("ListParticipants")}
          >
            <BiMessage className="icon" />
            List of Participants
          </a>
          {/* <a href="#" className='item' onClick={() => setContent('AddCriteria')}>
            <BiMessage className='icon' />
            Add Criteria
          </a> */}
          {/* <a href="#" className='item' onClick={() => setContent('SeeCriteria')}>
            <BiMessage className='icon' />
            See Added Criteria
          </a> */}
          <a href="#" className="item" onClick={() => setContent("Check")}>
            <BiMessage className="icon" />
            Result Detail
          </a>

          <a
            href="#"
            className="item"
            onClick={() => setContent("ListParticipants")}
          >
            <BiMessage className="icon" />
            Report
          </a>
          <a href="#" className="item">
            <BiHelpCircle className="icon" />
            <button onClick={this.logout} className="logoutt">
              Logout
            </button>
          </a>
        </div>
      </div>
    );
  }
}
