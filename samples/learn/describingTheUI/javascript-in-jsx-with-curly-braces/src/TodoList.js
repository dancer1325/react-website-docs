const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  const headerTag = 'h1';
  const className = 'todo';
  let person = {
    name: 'Alfredo',
    surName: 'Toledano'
  }
  return (
    <>
      {/* use `{ }` */}
      {/* 1. BETWEEN opening & closing tag */}
      <h1>{name}'s To Do List</h1> {/* evaluate a variable */}
      <h1>{person.name + ' ' + person.surName}</h1> {/* concatenate */}
      <h1>{formatDate(today)}</h1> {/* evaluate a function */}
      {/* NOT valid | tag itself
      <{headerTag}></{headerTag}>
      <"{headerTag}"><\"{headerTag}\">  */}

      {/* 2. ATTRIBUTES */}
      <h1 className={className}>To Do</h1> {/* evaluate a variable */}
      <h1 className="todo">To Do</h1> {/* hardcoded value */}
      <h1 className="{className}">To Do</h1> {/* NOT evaluate, because it's wrapped by `""` */}




      {/* use `{{ }}` */}
      {/* 1. BETWEEN opening & closing tag */}
      {/* NOT valid to display WHOLE object */}
      {/*<p>{{person}}</p> */}
      {/* 2. ATTRIBUTES */}
      <ul style={{
        backgroundColor: 'black',     // attributes use camelCase == | HTML-CSS, background-color
        color: 'pink'
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}