import React, { useState } from 'react';
import { BiCalendarEdit } from "react-icons/bi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { FaCalendarMinus } from "react-icons/fa";
import TeacherList from './TeacherList'; // Import TeacherList component
import FirstSemister from './FirstSemister'; // Import FirstSemister component
import SecondSemister from './SecondSemister'; // Import SecondSemister component

const courses = [
  {
    title: "Total Teachers",
    icon: <PiChalkboardTeacher />,
  },
  {
    title: "First Semister",
    icon: <BiCalendarEdit />,
  },
  {
    title: "Second Semister",
    icon: < FaCalendarMinus />,
  },
];

const Card = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleCardClick = (title) => {
    setSelectedSemester(prevState => (prevState === title ? null : title));
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
    </div>
  );
}

export default Card;
