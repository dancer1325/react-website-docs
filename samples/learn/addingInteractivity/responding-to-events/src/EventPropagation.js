function EventPropagationGeneral() {
  return (
    <>
      <h2>EventPropagationGeneral</h2>
      <div onClick={() => {
        alert('You clicked on higher div | tree!');
      }}>
        {/* if you click | child buttons -> event is bubbled & catch | higher div */}
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    </>
  );
}

function ButtonStopPropagationUp({onClick: onClickStopped, children}){
  return (
    <button onClick={e => {
      // 1. Stop the propagation
      e.stopPropagation();
      // 2. execute the event
      onClickStopped();
    }}>
      {children}
    </button>
  );
}

function EventPropagationStopPropagation() {
  return (
    <>
      <h2>EventPropagationStopPropagation</h2>
      <div onClick={() => {
        alert('You clicked on higher div | tree!');
      }}>
        {/* if you click | child buttons -> event is NOT bubbled -> NOT catch | higher div */}
        <ButtonStopPropagationUp onClick={() => alert('Playing!')}>
          Play Movie
        </ButtonStopPropagationUp>
        <ButtonStopPropagationUp onClick={() => alert('Uploading!')}>
          Upload Image
        </ButtonStopPropagationUp>
      </div>
    </>
  );
}

export default function EventPropagation() {
  return (
    <>
      <h1>Event Propagation</h1>
      <EventPropagationGeneral />
      <EventPropagationStopPropagation />
    </>
  )
}
