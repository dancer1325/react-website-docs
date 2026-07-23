import './App.css';
import Profile from './Profile';
import PropJSX from './PropJSX';
import PropChangeTimeParent from './PropChangeTimeParent.js';
import PropAnyJSValue from './PropAnyJSValue';
import BuiltInProps from './BuiltInProps';
import ChildrenExamples from './ChildrenExamples';
import PropsImmutable from './PropsImmutable';

function App() {
  return (
    <>
      <BuiltInProps />
      <Profile />
      <PropAnyJSValue />
      <PropJSX />
      <ChildrenExamples />
      <PropChangeTimeParent />
      <PropsImmutable />
    </>
  );
}

export default App;
