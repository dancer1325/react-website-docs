import { useState } from 'react';

// mock
//      Reason: NO transition BETWEEN states
function MockedForm(
    {
        status = 'empty'
    }) {
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form>
                <textarea />
                <br />
                <button>
                    Submit
                </button>
            </form>
        </>
    )
}

function MockedMoreFunctionalityForm({
  // Try 'submitting', 'error', 'success':
  status = 'empty'
}) {
    if (status === 'success') {
    return <h1>That's right!</h1>
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form>
                <textarea disabled={
                status === 'submitting'
                } />
                <br />
                <button disabled={
                    status === 'empty' ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {status === 'error' &&
                    <p className="Error">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </form>
        </>
    );
}

// Step 2: Determine what triggers those state changes
function Form() {
    const [status, setStatus] = useState('empty');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    // Trigger: Changing the text input (human)
    function handleTextareaChange(e) {
        setAnswer(e.target.value);
        if (e.target.value.length === 0) {
            setStatus('empty');       // empty text -> 'empty'
        } else {
            setStatus('typing');      // non-empty text -> 'typing'
        }
    }

    // Trigger: Clicking the Submit button (human)
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');     // Trigger: Successful network response (computer)
        } catch (err) {
            setStatus('typing');
            setError(err);            // Trigger: Failed network response (computer)
        }
    }

    if (status === 'success') {
        return <h1>That's right!</h1>;
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>In which city is there a billboard that turns air into drinkable water?</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === 'lima') {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }
        }, 1500);
    });
}

export { MockedForm, MockedMoreFunctionalityForm, Form };