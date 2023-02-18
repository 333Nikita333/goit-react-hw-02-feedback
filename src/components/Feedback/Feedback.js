export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" onClick={onLeaveFeedback}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

