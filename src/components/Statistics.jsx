import { List } from './Feedback/FeedbackStyled/Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
}) => {
  return !(good + bad + neutral) > 0 ? (
    'There are no feedback'
  ) : (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback: {!(bad + neutral + good) ? 0 : positivePercentage}%
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
