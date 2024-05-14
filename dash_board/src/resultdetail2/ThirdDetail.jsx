import React from 'react';
import "./ThirdDetail.css";

export function ThirdDetail({ teachers }) {
  const calculateRatingDistribution = (criteria) => {
    const distribution = {
      veryLow: 0,
      low: 0,
      medium: 0,
      good: 0,
      veryGood: 0,
    };
    let totalRatings = 0;

    teachers.forEach((teacher) => {
      distribution[teacher[criteria]]++;
      totalRatings++;
    });

    return { distribution, totalRatings };
  };

  const renderDistribution = (criteria) => {
    const { distribution, totalRatings } = calculateRatingDistribution(criteria);

    const average = (
      (distribution.veryLow * 1 +
        distribution.low * 2 +
        distribution.medium * 3 +
        distribution.good * 4 +
        distribution.veryGood * 5) /
      totalRatings
    ).toFixed(2); // Round to 2 decimal places

    const percentage = ((average / 5) * 100).toFixed(1); // Calculate percentage

    return (
      <div className="column">
        <h2>{criteria} Rating Distribution:</h2>
        <p>Very Low: {distribution.veryLow}</p>
        <p>Low: {distribution.low}</p>
        <p>Medium: {distribution.medium}</p>
        <p>Good: {distribution.good}</p>
        <p>Very Good: {distribution.veryGood}</p>
        <p>Average: {average}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    );
  };

  // Calculate average percentage of all criteria
  const criteriaList = ['performance', 'punctuality', 'subjectKnowledge', 'assesmentMethod', 'interactionWithStudent', 'classRoomManagement', 'communicationWithStudent'];
  const totalPercentages = criteriaList.reduce((sum, criteria) => {
    const { distribution, totalRatings } = calculateRatingDistribution(criteria);
    const average = (
      (distribution.veryLow * 1 +
        distribution.low * 2 +
        distribution.medium * 3 +
        distribution.good * 4 +
        distribution.veryGood * 5) /
      totalRatings
    ).toFixed(2);
    const percentage = ((average / 5) * 100);
    return sum + parseFloat(percentage);
  }, 0);

  const averagePercentage = (totalPercentages / criteriaList.length).toFixed(1);

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
        <div className="column">
          <h2>Average Percentage of All Criteria:</h2>
          {criteriaList.map((criteria) => {
            const { distribution, totalRatings } = calculateRatingDistribution(criteria);
            const average = (
              (distribution.veryLow * 1 +
                distribution.low * 2 +
                distribution.medium * 3 +
                distribution.good * 4 +
                distribution.veryGood * 5) /
              totalRatings
            ).toFixed(2);
            const percentage = ((average / 5) * 100).toFixed(1);
            return (
              <p>{criteria}: {percentage}%</p>
            );
          })}
          <p>Total Average: {averagePercentage}%</p>
        </div>
      </div>
    </div>
  );
}
