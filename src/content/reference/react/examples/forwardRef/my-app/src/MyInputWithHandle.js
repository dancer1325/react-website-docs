import { forwardRef, useRef, useImperativeHandle } from 'react';

// Section 3: Exposing an imperative handle instead of a DOM node
// Instead of exposing the full <input> DOM node, expose only specific methods
const MyInputWithHandle = forwardRef(function MyInputWithHandle({ label, ...otherProps }, ref) {
    const inputRef = useRef(null);

    // Only expose focus() and scrollIntoView(), NOT the full DOM node
    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current.focus();
        },
        scrollIntoView() {
            inputRef.current.scrollIntoView();
        },
        // Parent CANNOT access inputRef.current.style, .value, etc.
    }), []);

    return (
        <label>
            {label}
            <input {...otherProps} ref={inputRef} />
        </label>
    );
});

export default MyInputWithHandle;
