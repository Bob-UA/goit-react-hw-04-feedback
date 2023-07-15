import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';



class FeedbackOptions extends React.Component {

  render() {
     const ar = Object.keys(this.props.valuesArray);
    return (
    <div>
      <ul className={css.listBtn}>
        {ar.map(name => {
          return (
            <li className={css.itemBtn} key={name}>
              <button
                type="button"
                className={css.btn}
                onClick={() => this.props.onLeaveFeedback(name)}
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
  )};
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  valuesArray: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};