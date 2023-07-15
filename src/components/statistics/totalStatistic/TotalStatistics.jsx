import PropTypes from 'prop-types';

function TotalStatistics({ total, positiveFeedback }) {
  return (
    <ul>
      <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
}

export default TotalStatistics;

TotalStatistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};