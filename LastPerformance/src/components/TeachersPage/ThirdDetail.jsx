// In ThirdDetail.js

import React from 'react';
import "./ThirdDetail.css"

export function ThirdDetail({ teachers }) {
  const calculateRatingDistribution = (criteria) => {
    const distribution = {
      veryLow: 0,
      low: 0,
      medium: 0,
      good: 0,
      veryGood: 0,
    };

    teachers.forEach((teacher) => {
      distribution[teacher[criteria]]++;
    });

    return distribution;
  };

  const renderDistribution = (criteria) => {
  const distribution = calculateRatingDistribution(criteria);

    return (
      <div className="column">
        <h2>{criteria} Rating Distribution:</h2>
        <p>Very Low: {distribution.veryLow}</p>
        <p>Low: {distribution.low}</p>
        <p>Medium: {distribution.medium}</p>
        <p>Good: {distribution.good}</p>
        <p>Very Good: {distribution.veryGood}</p>
      </div>
    );
  };
  // logout=()=>
  //   {
  // window.localStorage.clear();
  // window.location.href="./login"
  //   }
  return (
    <div className='c1'>
    <div className='cont'><h1>Teachers Average Result</h1></div>
    <div className="containerr">
    
      {renderDistribution('performance')}
      {renderDistribution('punctuality')}
      {renderDistribution('subjectKnowledge')}
      {renderDistribution('assesmentMethod')}
      {renderDistribution('interactionWithStudent')}
      {renderDistribution('classRoomManagement')}
      {renderDistribution('communicationWithStudent')}
    </div>
    {/* <button onClick={this.logout}  className='logoutt'>Logout</button>     */}

    </div>
  );
}
