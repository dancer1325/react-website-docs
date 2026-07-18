import './App.css';

// pure function
function double(number) {
  return 2 * number;
}

// React Component / == pure function
// Reason: SAME input -> SAME output & NOT change EXISTING objects or variables
function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

let guest = 0;

// React Component / NOT pure function
function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>NOT PURE{guest}</h2>;
}

// PREVIOUS React Component / refactor being pure function
function CupPure({guestProp}) {
  return <h2>NOT PURE -- REFACTORED TO -- PURE {guestProp}</h2>;
}

// React Component / pure & mutate variables | it's OWN scope
function PureMutateOwnScope() {
  let cups = [];  // variable mutated | it's OWN scope
  for (let i = 1; i <= 4; i++) {
    cups.push(
      <p key={i} >PureMutateOwnScope</p>
    );
  }
  return cups;
}

function App() {
  return (
    <>
      <p>{double(2)}</p>
      <Recipe drinkers={4} />
      <Cup />
      <Cup />
      <CupPure guestProp={2}/>
      <CupPure guestProp={2}/>
      <PureMutateOwnScope />
    </>
  );
}

export default App;
