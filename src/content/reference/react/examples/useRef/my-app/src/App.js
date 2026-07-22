import './App.css';
import {useRef} from "react";

function App() {
  return (
    <MyComponent/>
  );
}

// if you want to declare a ref -> call `useRef` | your component's top level
function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);

  const intervalId = setInterval(() => {
    // ...
  }, 1000);

  intervalRef.current = intervalId;

  clearInterval(intervalId);
}

export default App;
