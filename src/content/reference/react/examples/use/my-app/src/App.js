import { use } from 'react';
import './App.css';

function App() {

  function MessageComponent({ messagePromise }) {
    const message = use(messagePromise);
    const theme = use(ThemeContext);
    // ...
  }

  return (
    <></>
  );
}

export default App;
