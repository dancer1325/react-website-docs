function AddingEventHandlers() {

  function handleClick() {
    alert('You clicked me!');
  }

  function handleChange() {
    alert('You changed me!');
  }

  return (
    <>
      {/* 1. ways to define the event handler*/}
      <h1>ways to define the event handler</h1>
      {/* 1.2 -- as -- dedicated standalone function*/}
      <h2>-- as -- inline function</h2>
      <button onClick={handleClick}>
        I don't do anything
      </button>

      {/* 1.2 -- as -- inline function*/}
      <h2>-- as -- inline function</h2>
      <button onClick={function() {
        alert('You clicked me!');
      }}>
        I don't do anything
      </button>

      {/* 1.3 -- as -- inline arrow function*/}
      <h2>-- as -- inline arrow function</h2>
      <button onClick={() => {
        alert('You clicked me!');
      }}>
        I don't do anything
      </button>

      {/* 2.  functions are passed != invoked */}
      {/* function is invoked | rendering WITHOUT waiting for event triggered -- uncomment NEXT lines to see in action*/}
      {/*<input onChange={handleChange()} />
      <input onChange={alert('You changed me!')} />  inline function invocation*/}
    </>
  );
}

function EventHandlersReadingProps({ message, children }) {
  return (
    // event handler reading props
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

// onSmash    -- `onSomeCapitalLetter'  follows naming event handler props conventions
function ChildComponentWithEventHandlerAsProp({ onSmash, children }) {
  return (
    //  onClick's event handler is passed as React Component's prop
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

function ParentComponentPassingEventHandlerAsProp() {
  return (
    // Pass a prop / is event handler for the child component
    <ChildComponentWithEventHandlerAsProp onSmash={() => alert('Uploading!')}>
      Upload Image
    </ChildComponentWithEventHandlerAsProp>
  );
}

function ChildComponentWithEventHandlerAsPropNamingFollowingAppSpecificConcepts({ onPlayMovie, onUploadImage }) {
  return (
    <>
      {/* based on EACH button specific concept -> you comprehend the naming of event handler prop*/}
      <button onClick={onPlayMovie}>
        Play movie
      </button>
      <button onClick={onUploadImage}>
        Upload Image
      </button>
    </>
  );
}

function ParentComponentPassingEventHandlerAsPropNamingFollowingAppSpecificConcepts() {
  return (
    // Pass a prop / is event handler for the child component
    <ChildComponentWithEventHandlerAsPropNamingFollowingAppSpecificConcepts
      onPlayMovie={() => alert('Play movie clicked!')}
      onUploadImage={() => alert('Upload Image clicked!')}/>
  );
}

export default function AddingEventHandler(){
  return (
    <>
      <AddingEventHandlers />
      <h2>Event handlers reading props</h2>
      <EventHandlersReadingProps message="Playing!">
        Play Movie
      </EventHandlersReadingProps>
      <EventHandlersReadingProps message="Uploading!">
        Upload Image
      </EventHandlersReadingProps>
      <h2>Event handlers -- passed as -- props</h2>
      <ParentComponentPassingEventHandlerAsProp />
      <h2>Naming Event handlers props</h2>
      <ParentComponentPassingEventHandlerAsPropNamingFollowingAppSpecificConcepts />
    </>
  );
}