
import React from 'react'
import '../styles/Second Semister.css';
import Image1 from '../assets/esruu.jpg';

const teachers = [
    {
    image: Image1,
    name: ' Hiro Worku ',
    course: 'Android Devr',
    other: "Software Engineering",
    },

    {
      
    image: Image1,
    name: 'Habte Kibru ',
    course: 'Full Stack Developer',
    other: "Computer Science",
    },
    
    {
    image: Image1,
    name: ' Epha Belaineh ',
    course: 'Flutter Devr',
    other: "Information System",
    },

    {
    image: Image1,
    name: ' Esrael Wendimu',
    course: 'Android Devr',
    other: "Software Engineering",
    },
    
    {
      image: Image1,
      name: 'Nahom Mesfin',
      course: 'Full Stack Developer',
      other: "Computer Science",
    },

    {
      image: Image1,
      name: ' Natnael Temesgen',
      course: 'Flutter Devr',
      other: "Information System",
      },

      {
        image: Image1,
        name: ' Esrael Wendimu',
        course: 'Android Devr',
        other: "Software Engineering",
        },
        
]
const SecondSemister = () => {
  return (
    <div className='teacher--list'>
      <div className="list--header">
        <h2>Second Semister</h2>
     
      </div>

      <div className="list--container">
        {teachers.map((teacher)=>(
<div className="list">
  <div className="teacher--detail">
    <img src= {teacher.image} alt= {teacher.name} />
    <h2> {teacher.name} </h2>
   </div>

   <span className='spancourse'> {teacher.course} </span>
   <span className='spanother'> {teacher.other} </span>
   {/* <span className='teacher--todo'> : </span> */}

   </div>
        ))}
      </div>
    </div>
  )
}

export default SecondSemister;