import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';



const FeedbackOptions = ({ valuesArray, onLeaveFeedback}) => {
  const ar = Object.keys(valuesArray);
  return (
    <div>
      <ul className={css.listBtn}>
        {ar.map(name => {
          return (
            <li className={css.itemBtn} key={name}>
              <button
                type="button"
                className={css.btn}
                onClick={() => onLeaveFeedback(name)}
                name={name}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <h2 className={css.title}>Statistics:</h2>
    </div>
  );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  valuesArray: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};