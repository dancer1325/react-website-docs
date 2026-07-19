export default function ReactEventObject () {
  const handleMouseLeave = (e) => {
    // React's synthetic event
    console.log('React event type:', e.type);  // Outputs: "mouseleave"

    // Underlying native browser event
    console.log('Native event type:', e.nativeEvent.type);  // Outputs: "mouseout" != "mouseleave"

    // Demonstrating the difference between synthetic and native events
    console.log('Is synthetic event?', e.constructor.name);  // SyntheticEvent
    console.log('Is native event?', e.nativeEvent.constructor.name);  // MouseEvent
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue'
      }}
    >
      Hover and leave this area
    </div>
  );
};

// TODO: Properties

// TODO: Methods

// TODO: caveats
