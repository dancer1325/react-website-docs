// 1. named function | OWN React component
function ButtonWithEventHandler() {
    // named function
    //      's naming: `handleEventName`
    function handleClick() {
        alert('You clicked me!');
    }

    // pass it -- as a -- prop
    //  != invoke
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

// 2. inline function | JSX
function ButtonInline() {
    return (
        <button onClick={() => alert('Inline click!')}>
            Click me (inline)
        </button>
    );
}

// 3. pass != invoke — this is WRONG (fires on render, not on click)
function ButtonWrongInvoke() {
    function handleClick() {
        alert('This fires on RENDER, not on click!');
    }

    return (
        // handleClick() with () means INVOKE immediately during render
        // handleClick without () means PASS the function to be called later
        <button onClick={handleClick()}>
            Wrong: invoked on render
        </button>
    );
}

// 4. event handlers -- have access to the -- component's props
//    Reason: 🧠event handlers are declared | component 🧠
function AlertButton({ message, children }) {
    function handleClick() {
        // handleClick can access `message` prop (== React component's prop)
        alert(message);
    }

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}

function ReadingPropsInEventHandlers() {
    return (
        <>
            <AlertButton message="Playing movie!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading image!">
                Upload Image
            </AlertButton>
        </>
    );
}

// 5. Passing event handlers -- as -- props
//    use case: parent component -- specifies a -- child's event handler
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

// Parent decides WHAT happens when the child's button is clicked
function Toolbar() {
    return (
        <>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </>
    );
}

// 6. Naming event handler props
//    recommendations: `onFollowedByACapitalLetter`
function ButtonWithCustomEventHandlerProp({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

// component / supports MULTIPLE interactions
function ToolbarCustomNames({ onPlayMovie, onUploadImage }) {
    return (
        <>
            <ButtonWithCustomEventHandlerProp onSmash={onPlayMovie}>
                Play Movie
            </ButtonWithCustomEventHandlerProp>
            <ButtonWithCustomEventHandlerProp onSmash={onUploadImage}>
                Upload Image
            </ButtonWithCustomEventHandlerProp>
        </>
    );
}

function NamingEventHandlerProps() {
    return (
        <ToolbarCustomNames
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

export { ButtonWithEventHandler, ButtonInline, ButtonWrongInvoke, ReadingPropsInEventHandlers, Toolbar, NamingEventHandlerProps };
