import { useRef } from 'react';

// keep track the NUMBER of times / button was clicked -- vi -- ref
//      Reason: use ref because NOT affect the visual
export default function Counter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}