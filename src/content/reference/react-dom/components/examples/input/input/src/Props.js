import OnChange from './OnChange';

function CommonProps() {
  return (
    <>
      {/*1. children      NOT ALLOWED,  because it's a void element*/}
      {/* <input>
      <h1>Common Props</h1>
      <p>Common Props</p>
    </input>*/}

      {/*2. TODO: check REST of COMMON props*/}
    </>
  );
}

function FormActionProp(){
  return (
    <>
      {/*  TODO:*/}
    </>
  );
}

// TODO: Review browser's errors
function PropsControlInput() {
  return (
    <>
      <h1>PropsControlInput</h1>
      <h2>checked</h2>
      <input type="checkbox" checked={true} />
      <input type="radio" checked={false} />
      <h2>value</h2>
      <input type="checkbox" value={true} />
      <input type="radio" />
      <input type="text" value={'textSimple'} />
      <h2>checked & value</h2>
      <input type="text" value={'textSimple'} checked={true} />
      <input type="radio" checked={true} value={"radio"} />
      <input type="checkbox" checked={true} value={"checkbox"}/>
      {/* TODO: Why `onChange` is required?*/}
      <br />
    </>
  );
}

function PropsUncontrolledInput() {
  return (
    <>
      {/*  TODO: */}
    </>
  );
}

function PropsUncontrolledAndControlledInput() {
  return (
    <>
      {/*  TODO: */}
      <OnChange />
    </>
  );
}

export default function Props() {
  return (
    <>
      <h1>CommonProps</h1>
      <CommonProps />
      <h1>FormActionProp</h1>
      <FormActionProp />
      <h1>PropsControlInput</h1>
      <PropsControlInput />
      <h1>PropsUncontrolledInput</h1>
      <PropsUncontrolledInput />
      <h1>PropsUncontrolledAndControlledInput</h1>
      <PropsUncontrolledAndControlledInput />
    </>
  )
}