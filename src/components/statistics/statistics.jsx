import React from 'react';
import PropTypes from 'prop-types';
import TotalStatistics from './totalStatistic';


 const countTotalFeedback = (good, neutral, bad) => {
   return good + neutral + bad;
 };

 const countPositiveFeedbackPercentage = (good, total) => {
   return ((good / total) * 100).toFixed(0);
 };
 
function Statistics({ good, neutral, bad, }) {
    const total = countTotalFeedback(good, neutral, bad);
  const positiveFeedback = countPositiveFeedbackPercentage(good, total);
  return total ? (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <TotalStatistics total={total} positiveFeedback={positiveFeedback} />
    </div>
  ) : (
    <p>"There is no feedback"</p>
  );

}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;