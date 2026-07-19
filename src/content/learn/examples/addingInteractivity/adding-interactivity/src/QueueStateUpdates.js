import { useState } from 'react';

export default function QueueStateUpdates() {
  const [score, setScore] = useState(0);
  const [anotherScore, setAnotherScore] = useState(0);

  function buggyQueueStateUpdate() {
    console.log(score);
    setScore(score + 1);
    console.log(score); // SAME value as before set, because state is a snapshot
  }

  // UPDATER function!!
  function queueStateUpdate() {
    console.log(anotherScore);
    setAnotherScore((s) => s+1);
    console.log(anotherScore); // SAME value as before set, because state is a snapshot
  }

  return (
    <>
      <button onClick={() => {
        buggyQueueStateUpdate();
        buggyQueueStateUpdate();
        buggyQueueStateUpdate();
      }}>+3
      </button>
      <h1>Score: {score}</h1>


      <button onClick={() => {
        queueStateUpdate();
        queueStateUpdate();
        queueStateUpdate();
      }}>+3
      </button>
      <h1>ANOTHER Score: {anotherScore}</h1>
    </>
  )
}