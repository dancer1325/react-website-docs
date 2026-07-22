import { useRef } from 'react';
import './App.css';
import MyInput from './MyInput';
import MyVideoPlayer from './MyVideoPlayer';
import FormField from './FormField';
import MyInputWithHandle from './MyInputWithHandle';

export default function App() {
    const inputRef = useRef(null);
    const videoRef = useRef(null);
    const formFieldRef = useRef(null);
    const imperativeRef = useRef(null);

    return (
        <>
            {/* ===== Section 1: Exposing a DOM node to the parent ===== */}
            <h2>Section 1: Exposing a DOM node (focus input)</h2>
            <MyInput ref={inputRef} label="Enter your name: " />
            <button onClick={() => inputRef.current.focus()}>
                Focus the input
            </button>

            <hr />

            {/* ===== Section 1b: Playing and pausing a video ===== */}
            <h2>Section 1b: Exposing a DOM node (play/pause video)</h2>
            <MyVideoPlayer
                ref={videoRef}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                type="video/webm"
                width="250"
            />
            <br />
            <button onClick={() => videoRef.current.play()}>Play</button>
            <button onClick={() => videoRef.current.pause()}>Pause</button>

            <hr />

            {/* ===== Section 2: Forwarding through multiple components ===== */}
            <h2>Section 2: Forwarding ref through multiple components</h2>
            <FormField ref={formFieldRef} label="Email: " isRequired={true} />
            <button onClick={() => formFieldRef.current.focus()}>
                Focus email (Parent → FormField → MyInput → input)
            </button>

            <hr />

            {/* ===== Section 3: Exposing an imperative handle ===== */}
            <h2>Section 3: Imperative handle (only focus, not full DOM)</h2>
            <MyInputWithHandle ref={imperativeRef} label="Secret field: " />
            <button onClick={() => imperativeRef.current.focus()}>
                Focus (works — exposed via useImperativeHandle)
            </button>
            <button onClick={() => {
                try {
                    // This will fail because .value is NOT exposed
                    console.log(imperativeRef.current.value);
                    alert('value: ' + imperativeRef.current.value);
                } catch (e) {
                    alert('Cannot access .value — not exposed by useImperativeHandle!');
                }
            }}>
                Try to read .value (undefined — NOT exposed)
            </button>
        </>
    );
}
