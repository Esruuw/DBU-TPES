import React, { Component } from 'react';
import Contentheader from './Contentheader';
import Card from './Card';
import Profile from './Profile';

import TeacherList from './TeacherList';
import '../styles/Content.css';
import {BiHelpCircle, } from 'react-icons/bi';
export default class Content extends Component
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

render()
{
  return (
    <div className='Content'>
        <Contentheader/>
        <Card/>
        <TeacherList/>
     
    </div>
  
  );
}
}

