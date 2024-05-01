import React from 'react';
import {
    BiLogoHtml5, 
    BiLogoAndroid, 
    BiBuilding
} from 'react-icons/bi';
import './Result.css';

const courses =
[
{
    title : "Punctuality",
    icon : <BiLogoHtml5/>,
},

{
    title : "Class Room Management",
    icon : <BiLogoAndroid/>,
},

{
    title : "Interaction With Student",
    icon : <BiBuilding/>,
},
{
    title : "Subject Knowledge",
    icon : <BiBuilding/>,
},

{
    title : "Second Semister",
    icon : <BiBuilding/>,
},

{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},
{
    title : "Second Semister",
    icon : <BiBuilding/>,
},


];


const Result = () => {
    return (
        <div className='card--container'>
            {courses.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Result;