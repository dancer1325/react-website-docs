// if you paste directly HTML content does NOT ALWAYS work!
/*
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
    <ul>
      <li>Invent new traffic lights
        <li>Rehearse a movie scene
          <li>Improve spectrum technology
    </ul>
    );
}*/

// converting the PREVIOUS HTML -- to -- proper JSX
export default function TodoList() {
  return (
    <>
      <h1>{person.name}</h1>
      <div style={person.theme}>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
      </div>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};