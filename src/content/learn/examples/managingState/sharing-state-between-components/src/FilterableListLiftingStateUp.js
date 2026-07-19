import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableListLiftingStateUp() {
  const [query, setQuery] = useState('');
  // ALTERNATIVE solution: filtering here DIRECTLY the results
  //const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onValueChange={handleChange}/>
      <hr />
      <List items={foods} query={query} />
      {/* ALTERNATIVE SOLUTION
      <List items={foods} query={results} />*/}
    </>
  );
}

function SearchBar({ query,  onValueChange}) {

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onValueChange}
      />
    </label>
  );
}

function List({ items, query }) {
  return (
    <table>
      <tbody>
      {filterItems(items, query)
        .map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
