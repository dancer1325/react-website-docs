import './App.css';
import {MockedForm, MockedMoreFunctionalityForm, Form} from "./Form";

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
        <h1>Step 1</h1>
        <MockedForm/>
        <br/>
        <MockedMoreFunctionalityForm/>

        <p>Displaying MANY visual states at once</p>
        {/*Displaying MANY visual states at once*/}
        {statuses.map(status => (
            <section key={status}>
              <h4>Form ({status}):</h4>
              <MockedMoreFunctionalityForm status={status} />
            </section>
        ))}

        <h1>Step 2: Triggers of state changes</h1>
        <Form />
      </>

  );
}

export default App;
