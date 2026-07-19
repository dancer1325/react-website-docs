import { useState } from 'react';

// OWN <input> do NOT ever know the CURRENT value
function UncontrolledInput() {
  return (
    <>
      <input />
      {/* NOR you set a default value*/}
      <input defaultValue={"uncontrolledInputAndDefaultValue"} />
    </>
  )
}

function ControlledInput() {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
          Add 10 years
        </button>
      </label>
      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber}.</p>
      }
      <input type={'checkbox'} checked={checked} onClick={() => setChecked(!checked)} />
      <input type={'radio'} checked={checked} onClick={() => setChecked(!checked)}/>
    </>
  );
}

export default function ControllingInput() {
  return (
    <>
      <UncontrolledInput />
      <ControlledInput />
    </>
  )
}