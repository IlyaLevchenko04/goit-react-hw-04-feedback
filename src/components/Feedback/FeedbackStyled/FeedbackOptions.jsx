import { BtnList } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <li key={option}>
            <button onClick={onLeaveFeedback} name={option}>
              {option}
            </button>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
