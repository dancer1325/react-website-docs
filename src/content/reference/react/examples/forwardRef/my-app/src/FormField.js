import { forwardRef } from 'react';
import MyInput from './MyInput';

// Section 2: Forwarding a ref through multiple components
// FormField receives a ref and forwards it down to MyInput -> <input>
// Parent -> FormField -> MyInput -> <input> DOM node
const FormField = forwardRef(function FormField({ label, isRequired }, ref) {
    return (
        <div>
            <MyInput ref={ref} label={label} />
            {isRequired && <span style={{ color: 'red' }}> *</span>}
        </div>
    );
});

export default FormField;
