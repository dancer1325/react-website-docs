import { useState } from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

// if you want to return SEVERAL components -> wrap under
// 1. <div></div> or
// 2. <></>
function AboutPage() {
  return (
    <>
      <div>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </div>
      <div>
        <h1>Another section</h1>
        <p>React is <strong>great</strong>!</p>
      </div>
    </>
  );
}

function AddStyles() {
  return (
    <p className="paragraph">This is a styled div</p>
  );
}

const user = {
  name: 'Emmy Noether',
  // NEXT one, NOT valid, because it's a Wikipedia anchor link != direct image URL
  //imageUrl: 'https://es.wikipedia.org/wiki/Emmy_Noether#/media/Archivo:Noether.jpg',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Noether.jpg',
  imageSize: 90,
};

function DisplayData() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name} // String concatenation
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function ConditionalRendering() {
  const isOnline = true;
  return (
    <div>
      {/* ?:    Ternary operator  */}
      <h1>{isOnline ? 'ONLINE-TernaryOperator' : 'OFFLINE-TernaryOperator'}</h1>

      {/* if-else */}
      if (isOnline) {
        <h1>ONLINE if-else</h1>
      } else {
        <h1>OFFLINE if-else</h1>
      }

      {/* if-else   WITH  && operator */}
      {isOnline && <h1>ONLINE &&</h1>}
      {!isOnline && <h1>OFFLINE &&</h1>}
    </div>
  );
}

function RenderingLists() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

// `map()` to transform an array of products -- into an -- array of `<li>` items
  const listItems = products.map(product =>
    // key    ==    React key feature
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function RespondingToEvents() {
  // declare event handler | React component
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function UpdateScreenFirst() {
  // declare a state variable | your component
  const [count, setCount] = useState(0);
  // count        == current state  / by default it's 0
  // setCount     == function to update it

  function handleClick() {
    setCount(count + 1);
    // update the state   -> React will call your component function again
  }

  return (
    <v>
      <br/>
      <button onClick={handleClick}>
          UpdateScreenFirst - Clicked {count} times
      </button>
    </v>
  );
}

// BOTH <button> | SAME React Component / SHARE the state
function UpdateScreenSecond() {
  // declare a state variable | your component
  const [count, setCount] = useState(0);
  // count        == current state  / by default it's 0
  // setCount     == function to update it

  function handleClick() {
    setCount(count + 1);
    // update the state   -> React will call your component function again
  }

  return (
    <v>
      <br />
      <button onClick={handleClick}>
        UpdateScreenSecond - Clicked {count} times
      </button>
      <button onClick={handleClick}>
        UpdateScreenSecond - Clicked {count} times
      </button>
    </v>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <AddStyles />
      {/* NESTED
       React Component -- identified by starting by a -- capital letter*/}
      <MyButton />
      <AboutPage />
      <DisplayData />
      <ConditionalRendering />
      <RenderingLists />
      <RespondingToEvents />

      {/* OWN state / EACH of the next REACT components*/}
      <UpdateScreenFirst />
      <UpdateScreenFirst />

      {/* SEVERAL buttons / share state */}
      <UpdateScreenSecond />
    </div>
  );
}
