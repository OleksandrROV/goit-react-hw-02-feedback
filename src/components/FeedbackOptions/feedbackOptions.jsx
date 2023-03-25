import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <ul>
        {options.map(tytle => (
          <li key={tytle}>
            {tytle}{' '}
            <button type="button" onClick={() => onLeaveFeedback(tytle)}>
              {tytle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
