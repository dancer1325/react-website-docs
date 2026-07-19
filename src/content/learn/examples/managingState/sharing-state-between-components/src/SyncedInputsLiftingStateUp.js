import {useState} from 'react';

export default function SyncedInputsLiftingStateUp() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" text={text} onTextChange={handleChange} />
      <Input label="Second input" text={text} onTextChange={handleChange} />
    </>
  );
}

function Input({ label, text, onTextChange}) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onTextChange}
      />
    </label>
  );
}