import {useState} from 'react';

export default function StateSnapshot() {
    const [anotherStateVariable, setAnotherStateVariable] = useState(0);



    return (
      <button onClick={() => {
        console.log(anotherStateVariable);
        setAnotherStateVariable(anotherStateVariable + 1);
        console.log(anotherStateVariable);    // setState   == SAME value as before ==     does NOT change the state value!!!
        // ->   DIFFERENT value | NEXT render
      }}>
        Click me
      </button>
    );
}