import './App.css';
import {MockedForm, MockedMoreFunctionalityForm, FormSteps2to5, FormFinal} from "./Form";

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

function App() {
  return (
      <>
        <h1>Step 1: Identify visual states (mocks)</h1>
        <h2>1.1 MockedForm</h2>
        <MockedForm/>
        <br/>
        <h2>1.2 MockedMoreFunctionalityForm</h2>
        <MockedMoreFunctionalityForm/>

        <h2>1.3 Displaying MANY visual states at once</h2>
        {statuses.map((status, index) => (
            <section key={status}>
              <h3>1.3.{index + 1} Visual state: {status}</h3>
              <MockedMoreFunctionalityForm status={status} />
            </section>
        ))}

        <h1>Steps 2-5: Triggers + state + remove redundant + connect event handlers</h1>
        <h2>2-5.1 </h2>
        <FormSteps2to5/>

        <h1>Final: Step 4 FULLY applied (removed 'empty' state)</h1>
        <FormFinal/>
      </>

  );
}

export default App;
