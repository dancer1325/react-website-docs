import './App.css';
import Accordion from './Accordion';
import AccordionLiftingStateUp from './AccordionLiftingStateUp';
import SyncedInputs from './SyncedInputs';
import SyncedInputsLiftingStateUp from './SyncedInputsLiftingStateUp';
import FilterableList from './FilterableList';
import FilterableListLiftingStateUp from './FilterableListLiftingStateUp';

function App() {
  return (
    <>
      <h1>INITIALLY</h1>
      <Accordion />
      <h1>AFTER lifting state up</h1>
      <AccordionLiftingStateUp />
      <h1>ADDITIONAL LIFTING STATE UP CHALLENGES</h1>
      <h2>Case1</h2>
      <h3>originally</h3>
      <SyncedInputs />
      <h3>after lifting state up</h3>
      <SyncedInputsLiftingStateUp />
      <h2>Case2</h2>
      <h3>originally</h3>
      <FilterableList />
      <h3>after lifting state up</h3>
      <FilterableListLiftingStateUp />
    </>
  );
}

export default App;
