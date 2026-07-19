// TODO:
export default function EventHandler() {

  //  `event` handler function ONLY has 1! parameter
  function handleEvent(e) {
    console.log(e); // React event object
  }

  // `event` handler function WRONGLY declared / > 1 parameter
  function handleWrongEvent(e, f) {
    console.log(e + f);
  }

  return (
    <>
      <h1>`Event` handler type</h1>
      <h2>Event handler function WELL defined / ONLY 1! parameter</h2>
      <button onClick={handleEvent} />
      <h2>Event handler function WRONGLY defined / > 1 parameters</h2>
      <button onClick={handleWrongEvent} />
    </>
  )
}