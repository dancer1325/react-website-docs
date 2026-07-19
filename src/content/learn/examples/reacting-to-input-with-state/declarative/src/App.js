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
        <MockedForm/>
        <br/>
        <MockedMoreFunctionalityForm/>

        <p>Displaying MANY visual states at once</p>
        {statuses.map(status => (
            <section key={status}>
              <h4>Form ({status}):</h4>
              <MockedMoreFunctionalityForm status={status} />
            </section>
        ))}

        <h1>Steps 2-5: Triggers + state + remove redundant + connect event handlers</h1>
        <FormSteps2to5/>

        <h1>Final: Step 4 FULLY applied (removed 'empty' state)</h1>
        <FormFinal/>
      </>

  );
}

export default App;
