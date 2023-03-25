export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  console.log(total, positivePercentage);
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>PositivePercentage: {positivePercentage}%</li>
    </ul>
  );
};
