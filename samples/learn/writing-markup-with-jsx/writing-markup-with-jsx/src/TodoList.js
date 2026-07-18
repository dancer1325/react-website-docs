export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      {/* | HTML, <img ...>   -> | JSX, <img /> */}
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
          {/* | HTML, <li> ...   -> | JSX, <li>...</li> */}
          <li>Invent new traffic lights </li>
          <li>Rehearse a movie scene </li>
          <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}