import './App.css';

function ChildrenProps() {
  return (
    <>
      {/*1. ways to pass children */}
      {/*1.1 Passing children implicitly */}
      <div>
        <h1>Children Props</h1>
      </div>

      {/*1.2 Passing children explicitly*/}
      <div children={<h1>Children Props</h1>} />

      {/*2. ALLOWED content / pass | children*/}
      {/*2.1 element  -- check PREVIOUS examples*/}
      {/*2.2 string*/}
      <div>
        STRING
      </div>
      {/*2.3 number*/}
      <div>
        4
      </div>
      {/*2.4 portal*/}
      {/* TODO: */}
      {/*2.5 empty node     == NOTHING displayed & empty node | DOM */}
      <div>
        {false}
      </div>

    </>
  )
}

function App() {
  return (
    <ChildrenProps />
  );
}

export default App;
