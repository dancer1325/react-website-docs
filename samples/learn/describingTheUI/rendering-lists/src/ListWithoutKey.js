const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

// SAME JSX element, except to the content
// 👀 | browser's console, you see the warning about  1! "key" prop / EACH child!! 👀
export default function ListWithoutKey() {

  // GOAL: simplify next code, -- via -- array functions
  /*<ul>
    <li>Creola Katherine Johnson: mathematician</li>
    <li>Mario José Molina-Pasquel Henríquez: chemist</li>
    <li>Mohammad Abdus Salam: physicist</li>
    <li>Percy Lavon Julian: chemist</li>
    <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
  </ul>*/

  // [] of JSX nodes
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}