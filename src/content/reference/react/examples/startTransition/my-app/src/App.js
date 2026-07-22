import { startTransition, useState } from 'react';
import './App.css';

function App() {

  function TabContainer() {
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
      startTransition(() => {
        // mark a state update -- as a --Transition
        setTab(nextTab);
      });
    }
    // ...
  }

  return (
    <></>
  );
}

export default App;
