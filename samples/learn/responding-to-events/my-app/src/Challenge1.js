function LightSwitchChallenge1() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        // NOTHING happens | click the button
        // PROBLEM: invocation == happens | render
        <button onClick={handleClick()}>
            Toggle the lights
        </button>
    );
}

function LightSwitchChallenge1Solution1() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        // naming != invoke
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}

function LightSwitchChallenge1Solution2() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    return (
        // wrap the call | ANOTHER function
        <button onClick={() => handleClick()}>
            Toggle the lights
        </button>
    );
}

export { LightSwitchChallenge1, LightSwitchChallenge1Solution1, LightSwitchChallenge1Solution2 };