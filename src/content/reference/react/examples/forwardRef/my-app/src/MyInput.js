import { forwardRef } from 'react';

// Section 1: Exposing a DOM node to the parent component
// The simplest case: forwardRef to expose the <input> DOM node to the parent
const MyInput = forwardRef(function MyInput({ label, ...otherProps }, ref) {
    return (
        <label>
            {label}
            <input {...otherProps} ref={ref} />
        </label>
    );
});

export default MyInput;
