import { forwardRef, useRef, useImperativeHandle } from "react";
import './App.css';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }), []);

  return <input {...props} ref={inputRef} />;
});

function App() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <MyInput ref={ref} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

export default App;
