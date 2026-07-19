import './App.css';
import Profile from './Profile';  // import default export
import {Footer, PreviousToFooter} from "./Footer";      //
import SumUpBody, {FirstBody, SecondBody} from "./Body";    // imported DIFFERENTLY the named exports vs default export

function App() {
  return (
      <>
        <Profile />
        <FirstBody/>
        <SecondBody/>
        <SumUpBody/>
        <PreviousToFooter/>
        <Footer />
      </>
  )
}

export default App;
