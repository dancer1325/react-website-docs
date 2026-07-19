// Event "bubbles" or "propagates" up | tree
//    == starts | event happened, goes up the tree
function BubblingExample() {
    return (
        <div onClick={() => alert('3. div clicked (grandparent)')}>
            <div onClick={() => alert('2. inner div clicked (parent)')}>
                <button onClick={() => alert('1. button clicked (child)')}>
                    Click me — watch it bubble up!
                </button>
            </div>
        </div>
    );
}

// ⚠️ EXCEPT TO `onScroll` ⚠️ — ONLY works | JSX tag | you attach it to
function ScrollDoesNotBubble() {
    return (
        <div
            onScroll={() => console.log('Parent scrolled!')}
            style={{ height: '200px', overflow: 'auto', border: '2px solid red', padding: '10px' }}
        >
            <p>Parent (red border) — scroll me and check console: "Parent scrolled!"</p>
            <div
                onScroll={() => console.log('Child scrolled! (does NOT trigger parent onScroll)')}
                style={{ height: '100px', overflow: 'auto', border: '2px solid blue', margin: '10px' }}
            >
                <p style={{ height: '300px' }}>
                    Child (blue border) — scroll me and check console: only "Child scrolled!" appears, NOT "Parent scrolled!"
                </p>
            </div>
            <p style={{ height: '400px' }}>Extra content to make parent scrollable too.</p>
        </div>
    );
}

// 2.1
// event handlers receive 1! argument == event object (`e`)
//    uses: read information about the event == stop propagation
function EventObjectExample() {
    function handleClick(e) {
        // read information about the event
        console.log('Event type:', e.type);             // "click"
        console.log('Target element:', e.target.tagName); // "BUTTON"
        console.log('Client X:', e.clientX);            // mouse X position
        console.log('Client Y:', e.clientY);            // mouse Y position
        alert(`Clicked at (${e.clientX}, ${e.clientY}) on a <${e.target.tagName}>`);
    }

    return (
        <div onClick={() => alert('Parent — this WON\'T fire because child stops propagation')}>
            <button onClick={(e) => {
                e.stopPropagation();  // stop the propagation
                handleClick(e);       // read information about the event
            }}>
                Click me — reads event info & stops propagation
            </button>
        </div>
    );
}

function CapturePhaseEvents() {
    // Capture phase: `onClickCapture` fires BEFORE children's `onClick`
    //  1. travels DOWN / calls ALL `onClickCapture` handlers
    //  2. runs the clicked element's `onClick` handler
    //  3. travels UP / calls ALL `onClick` handlers (bubble)
    //
    // use case: routers OR analytics — catch ALL clicks regardless of stopPropagation
    return (
        <>
            <p>Capture phase events</p>
            <div
                onClickCapture={() => console.log('1. CAPTURE: parent catches event EVEN IF child calls stopPropagation')}
                onClick={() => console.log('3. BUBBLE: parent receives event GOING UP')}
            >
                <button onClick={(e) => {
                    e.stopPropagation(); // stops BUBBLE phase, but capture already fired!
                    console.log('2. TARGET: button clicked (stopPropagation called)');
                }}>
                    Click me — check console for capture → target → bubble order
                </button>
            </div>
        </>
    );
}

// 2.2 Passing handlers -- as -- ALTERNATIVE to propagation
// `onClick`
//      == prop / passed -- by the -- parent
function ButtonPassedHandler({ onClick, children }) {
    return (
        <button onClick={e => {
            // run some code
            e.stopPropagation();

            // you need to invoke the passed handler
            onClick();
        }}>
            {children}
        </button>
    );
}

// 2.3 Preventing DEFAULT behavior
// if you click a <button> inside | <form>  ->  <form> submits the event -> by default, reload the WHOLE page
function SignupWithDefaultBehavior() {
    return (
        <form onSubmit={() => alert('Submitting!')}>
            <input />
            <button>Send</button>
        </form>
    );
}

function SignupPreventingDefaultBehavior() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

export {ScrollDoesNotBubble, BubblingExample, EventObjectExample, CapturePhaseEvents, ButtonPassedHandler, SignupWithDefaultBehavior, SignupPreventingDefaultBehavior}
