function ChildrenProps() {
  return (
    <>
      {/*1. ways to pass children */}
      {/*1.1 Passing children implicitly */}
      <div>
        <h1>Children Props</h1>
      </div>

      {/*1.2 Passing children explicitly*/}
      <div children={<h1>Children Props</h1>} />

      {/*2. ALLOWED content / pass | children*/}
      {/*2.1 element  -- check PREVIOUS examples*/}
      {/*2.2 string*/}
      <div>
        STRING
      </div>
      {/*2.3 number*/}
      <div>
        4
      </div>
      {/*2.4 portal*/}
      {/* TODO: */}
      {/*2.5 empty node     == NOTHING displayed & empty node | DOM */}
      <div>
        {false}
      </div>

    </>
  )
}

function DangerouslySetInnerHTML() {
  let innerHTML = { __html: '<p>some html</p>' }
  return (
    <>
      <div dangerouslySetInnerHTML={innerHTML} />

      {/* children & dangerouslySetInnerHTML      NOT ALLOWED setting | SAME time */}
      {/*<div dangerouslySetInnerHTML={innerHTML} >
        <h1>Hello</h1>
      </div >*/}

      {/* HTML inside is NOT trusted */}
      {/* TODO: build an example */}
    </>
  )
}

// TODO: `ref`

// TODO: `suppressContentEditableWarning`

// TODO: `suppressHydrationWarning`

// TODO: `style`

export default function CommonProps() {
  return (
    <>
      <ChildrenProps />
      <DangerouslySetInnerHTML />
    </>
  );
}