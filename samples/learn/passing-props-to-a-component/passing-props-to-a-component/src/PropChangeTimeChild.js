// this React component receives DIFFERENT props | time
export default function PropChangeTimeChild({ color, time }) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}