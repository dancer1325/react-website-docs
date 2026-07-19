import './App.css';
import ListWithoutKey from './ListWithoutKey';
import ListWithFilter from './ListWithFilter';
import ListWithKey from './ListWithKey';
import ListWithTwoNestedArrayMap from './ListWithTwoNestedArrayMap';
import CreateArrayOfJSXElements from './CreateArrayOfJSXElements';

function App() {
  return (
    <>
      <ListWithoutKey />
      <p>ListWithFilter</p>
      <ListWithFilter />
      <p>ListWithKey</p>
      <ListWithKey />
      <ListWithTwoNestedArrayMap />
      <CreateArrayOfJSXElements />
    </>
  );
}

export default App;
