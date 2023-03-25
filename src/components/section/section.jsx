export default function Section({ tytle, children }) {
  return (
    <div>
      <h2>{tytle}</h2>
      {children}
    </div>
  );
}
