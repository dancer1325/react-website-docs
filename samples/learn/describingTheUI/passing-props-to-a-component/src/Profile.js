function AvatarWithoutCaptureProps() {
  return (
    // 1. TYPICAL / FAMILIAR props     `className`, `src`, `alt`, `width`, `height`
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

function AvatarCapturePropsDestructuring({person, size = 300}) {
  return (
    // 1. TYPICAL / FAMILIAR props     `className`, `src`, `alt`, `width`, `height`
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + '.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// RECOMMENDATION: if it's UNIQUE argument -> use `props` as naming
function AvatarCapturePropsUniqueArgument(uniqueArgument) {
  return (
    // 1. TYPICAL / FAMILIAR props     `className`, `src`, `alt`, `width`, `height`
    <img
      className="avatar"
      src={'https://i.imgur.com/' + uniqueArgument.person.imageId + '.jpg'}
      alt={uniqueArgument.person.name}
      width={uniqueArgument.size}
      height={uniqueArgument.size}
    />
  );
}

export default function Profile() {
  const propPassed = {
    person: {
      name: 'Lin Lanying',
      imageId: '1bX5QH6'
    },
    size:50
  }
  return (
    <>
      {/* 1. NO passing props*/}
      <AvatarWithoutCaptureProps />

      {/* 2. passing props */}
      {/* 2.1 | React component / NO capture them -> NO error == ALL fine */}
      <AvatarWithoutCaptureProps
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
      />
      {/* 2.2 | React component / capture them */}
      {/* 2.2.1 | React component / capture them -- via -- destructuring */}
      <AvatarCapturePropsDestructuring
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={200}
      />
      {/* 2.2.1.1 NO pass a prop -> use the default value */}
      <AvatarCapturePropsDestructuring
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        // size={200}     NOT set -> use the default value
      />
      {/* 2.2.2 | React component / capture them -- via -- unique argument */}
      <AvatarCapturePropsUniqueArgument
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={200}
      />
      {/* 2.3 pass prop -- via -- spread syntax */}
      <AvatarCapturePropsUniqueArgument {...propPassed} />
    </>
  );
}