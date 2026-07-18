import { people } from './data.js';
import { getImageUrl } from './util.js';

function KeyNotPassedViaProps(props) {
  // | browser's console, check that it's NOT logged the real key
  console.log(props);
  return <p>keyNotPassedViaProps</p>
}

export default function ListWithKey() {
  // 1. if SEVERAL DOM nodes / EACH list item -> wrap under <div> or <Fragment>
  /*const listItems = people.map(person =>
    // WRAPPED under <Fragment> -- passing -- key
    <Fragment key={person.id}>
      <h1>{person.name}</h1>
      <p>{person.bio}</p>
    </Fragment>
  );*/

  // 2. 1! DOM node / EACH list item
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  // 3. rules of keys
  // 3.1 SAME keys can be used | DIFFERENT JSX nodes
  const otherListOfItems = people.map(person =>
    // SAME key as BEFORE
    <li key={person.id}>
      <p>SAME KEY AS BEFORE</p>
    </li>
  );

  // 3.2 generate keys | rendering time == BAD practice !!
  const keysGeneratedAtRenderingTime = people.map(person =>
    // SAME key as BEFORE
    <li key={Math.random()}>
      <p>KEYS GENERATED AT RENDERING TIME</p>
    </li>
  );

  // 3.3 keys NOT shared -- via -- props
  const keysNotSharedViaProps = people.map(person =>
    <KeyNotPassedViaProps key={person.id} />
  );

  return (
    <>
      <ul>{listItems}</ul>
      <ul>{otherListOfItems}</ul>
      <ul>{keysGeneratedAtRenderingTime}</ul>
      <ul>{keysNotSharedViaProps}</ul>
    </>
  );
}