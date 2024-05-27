import React, { useState } from 'react';
import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from 'react-icons/bi';
import TeacherList from './TeacherList'; // Import TeacherList component
import FirstSemister from './FirstSemister'; // Import FirstSemister component
import SecondSemister from './SecondSemister'; // Import SecondSemister component

const courses = [
  {
    title: "Total Teachers",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "First Semister",
    icon: <BiLogoAndroid />,
  },
  {
    title: "Second Semister",
    icon: <BiBuilding />,
  },

];

const Card = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleCardClick = (title) => {
    console.log("Current State:", selectedSemester); // Check the current state before updating
    setSelectedSemester(prevState => (prevState === title ? null : title));
    console.log("Updated State:", selectedSemester); // Check what it's being updated to
  };
  

  return (
    <div className='card--container'>
      {courses.map((item, index) => (
        <div key={index} className="card" onClick={(e) => {
          e.stopPropagation(); // Prevent any parent handlers from being notified of the event
          handleCardClick(item.title);
        }}>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
      {selectedSemester === "First Semister" && <FirstSemister />}
      {selectedSemester === "Second Semister" && <SecondSemister />}
      {selectedSemester === "Total Teachers" && <TeacherList />}
      {console.log("Rendering with selectedSemester:", selectedSemester)} {/* Add a log to check rendering */}
    </div>
  );
}

export default Card;
