import './App.css';
import Profile from './Profile';    //  import the module

// nest React components
function App() {
  return (
    <>
      <p>Header</p>
      <Profile />
      <Profile />
    </>
  );
}

export default App;
