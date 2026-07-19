function ItemWithTernaryOperator({ name, isPacked }) {
  //  NOT work the concatenation of evaluating the JS expression
  //return <li className="item">{name + isPacked ? '✅' : '❌'}</li>;
  return <li className="item">{name} {isPacked ? '✅' : '❌'}</li>;
}

function ItemWithTernaryOperatorWrappingALL({ name, isPacked }) {
  // NOT valid, because you need to wrap the ternary expression
  /*return (
    {isPacked ? <li className="item">{name + '✅'}</li>
        : <li className="item">{name + '❌'}</li>}
  )*/

  // if each term is complex -> you can wrap with `()`
  /*return (
    <>
      {isPacked ?
        (<li className="item">{name + '✅'}</li>)
        : (<li className="item">{name + '❌'}</li>)}
    </>
  )*/

  // removing `()` wrapping
  return (
    <>
      {isPacked ?
          <li className="item">{name + '✅'}</li>
        : <li className="item">{name + '❌'}</li>}
    </>
  )
}

function ItemWithIfElse({ name, isPacked }) {
  // 1. SEVERAL JSX elements
  /*if (isPacked) {
    return <li className="item">{name + '✅'}</li>;
  }
  return <li className="item">{name + '❌'}</li>;*/

  // 2. via variable & 1! JSX element
  let itemContent = name;
  if (isPacked) {
    itemContent = name + '✅';
  } else {
    itemContent = name + '❌';
  }
  return <li className="item">{itemContent}</li>
}

function ItemReturningNothing({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name + '✅'}</li>;
  }
  return null;
}

function ItemWithAND({ name, isPacked }) {
  // if isPacked==false -> SECOND evaluation expression is NOTHING
  return <li className="item">{name} {isPacked && '✅'}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <ItemWithTernaryOperator
          isPacked={true}
          name="Space suit"
        />
        <ItemWithTernaryOperator
          isPacked={false}
          name="Space suit"
        />
        <ItemWithTernaryOperatorWrappingALL
          isPacked={true}
          name="ItemWithTernaryOperatorWrappingALL"
        />
        <ItemWithTernaryOperatorWrappingALL
          isPacked={false}
          name="ItemWithTernaryOperatorWrappingALL"
        />
        <ItemWithIfElse
          isPacked={true}
          name="ItemWithIfElse"
        />
        <ItemWithIfElse
          isPacked={false}
          name="ItemWithIfElse"
        />
        <ItemReturningNothing
          isPacked={true}
          name="ItemReturningNothing"
        />
        <ItemReturningNothing
          isPacked={false}
          name="ItemReturningNothing"
        />
        <ItemWithAND
          isPacked={true}
          name="ItemWithAND"
        />
        <ItemWithAND
          isPacked={false}
          name="ItemWithAND"
        />
        <ItemWithAND
          isPacked={22}
          name="ItemWithANDLeftSideNumberGreaterThanZero"
        />
        <ItemWithAND
          isPacked={0}
          name="ItemWithANDLeftSideNumberZero"
        />
        <ItemWithAND
          isPacked={-22}
          name="ItemWithANDLeftSideNumberLowerThanZero"
        />
      </ul>
    </section>
  );
}