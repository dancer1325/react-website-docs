import './App.css';
import CommonProps from './CommonProps';
import EventHandler from './EventHandler';
import ReactEventObject from './ReactEventObject';

function App() {
  return (
    <>
      <h1>COMMON props</h1>
      <CommonProps />
      <h1>React Event Object</h1>
      <ReactEventObject />
      <h1>`event` handler type</h1>
      <EventHandler />
    </>
  );
}

export default App;
