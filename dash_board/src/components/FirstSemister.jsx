
import React from 'react'
import '../styles/FirstSemister.css';
// import Image1 from '../assets/esruu.jpg';
import Image2 from '../assets/miki.jpg';

const teachers = [
    {
    image: Image2,
    name: ' Kenean Esrael ',
    course: 'Android Devr',
    other: "Software Engineering",
    },

    {
      
    image: Image2,
    name: ' Haleluya Nahom ',
    course: 'Full Stack Developer',
    other: "Computer Science",
    },
    
    {
    image: Image2,
    name: ' Grace Natnael ',
    course: 'Flutter Devr',
    other: "Information System",
    },

    {
    image: Image2,
    name: ' Amen Esrael ',
    course: 'Android Devr',
    other: "Software Engineering",
    },
    
    {
      image: Image2,
      name: 'Fenan Nahom ',
      course: 'Full Stack Developer',
      other: "Computer Science",
    },

    {
      image: Image2,
      name: ' Natnael Temesgen',
      course: 'Flutter Devr',
      other: "Information System",
      },

      {
        image: Image2,
        name: ' Esrael Wendimu',
        course: 'Android Devr',
        other: "Software Engineering",
        },
        
]
const FirstSemester = () => {
  return (
    <div className='teacher--list'>
      <div className="list--header">
        <h2>First Semister</h2>
      
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

export default FirstSemester;