import { useRef, useEffect } from "react";

function ReadOrWriteARef() {
    const myRef = useRef();
    const myOtherRef = useRef();

    // 2. | event handlers
    useEffect(() => {
        // ✅ | effects
        myRef.current = 123;
    });
    // ...
    function handleClick() {
        // ✅ read or write refs | event handlers
        console.log(myOtherRef.current);
    }

    // 1. | render
    // ...
    // 🚩 Don't write a ref during rendering
    myRef.current = 123;

    // ...
    // 🚩 Don't read a ref during rendering
    return <h1>{myOtherRef.current}</h1>;
}