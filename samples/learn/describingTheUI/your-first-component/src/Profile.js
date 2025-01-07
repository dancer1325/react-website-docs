export default function Profile() {
  // NOT recommended to nest React component declaration
  /*  function AnotherComponent() {
    return <div>Another component</div>
  }*/

  // 1. writing | 1! line
  //return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

  // 2. using MULTIPLE lines
  // 2.1 if you do NOT use `()` -> NEXT lines are ignored by return
  /*return
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />*/
  // 2.2 use `()`   PROPERLY
  return (
    <>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      <ProfileAtTopLevel />
      <Congratulations />
    </>
  )
}

// Define another React Component | top level
function ProfileAtTopLevel() {
  return (
    <p>AnotherAtTopLevel</p>
  );
}

function Congratulations() {
  return (
    <h1>Good job!</h1>
  );
}