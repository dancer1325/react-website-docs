import './App.css';
import Challenge1 from "./Challenge1";
import Challenge2Declarative from "./Challenge2Declarative";

function App() {
  return (
    <>
      <h1>Challenge1: </h1>
      <Challenge1/>

      <h1>Challenge2: </h1>
        {/* | Create React App,
                static files | "public/"    */}
        <a href="/Challenge2Imperative.html">
        Challenge2 imperative
        </a>
        <Challenge2Declarative/>

        <h1>Challenge3: </h1>
        {/* | Create React App,
                static files | "public/"    */}
        <a href="/Challenge2Imperative.html">
            Challenge2 imperative
        </a>
        <Challenge2Declarative/>
    </>
  );
}

export default App;
