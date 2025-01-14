export default function OnChange() {
  const propNotConfiguredOnchange = "propNotConfiguredOnchange";
  // `event` handler function
  function onChangeEventHandler(e) {
    console.log(e.target.value)
  }

  // TODO: Required | controlled inputs

  // TODO: 's behavior == browser `input` event

  return (
    <>
      <h3>`onChange`</h3>
      <input type="text" onChange={onChangeEventHandler} />

      {/* if you set value & NOT configure onChange -> this value can NOT be modified EVER */}
      <input value={"Hello"} />
      {/* ALTHOUGH you pass as prop -> React reverts it*/}
      <input value={propNotConfiguredOnchange} />
    </>
  )
}