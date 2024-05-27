import React from 'react';
import "./ThirdDetailStudent.css";

export function ThirdDetailStudent({ evaluations }) {
  const calculateRatingDistribution = (criteria) => {
    const distribution = {
      veryLow: 0,
      low: 0,
      medium: 0,
      good: 0,
      veryGood: 0,
    };
    let totalRatings = 0;

    evaluations.forEach((evaluation) => {
      const rating = evaluation[criteria];
      if (rating !== undefined) {
        distribution[rating]++;
        totalRatings++;
      }
    });

    return { distribution, totalRatings };
  };

  const criteriaList = ['performance', 'punctuality', 'subjectKnowledge', 'assesmentMethod', 'interactionWithStudent', 'classRoomManagement', 'timeManagement'];
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
      <div className='cont'><h1></h1></div>
      <div className="containerr">
        <div className="column">
          <h2>Average Percentage of All Criteria|| Student</h2>
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
              <p key={criteria}>{criteria}: {percentage}%</p>
            );
          })}
          <p>Total Average: {averagePercentage}%</p>
        </div>
      </div>
    </div>
  );
}
