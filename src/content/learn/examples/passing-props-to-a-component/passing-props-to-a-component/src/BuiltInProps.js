// BUILT-IN React components' ALLOWED props == HTML attributes of that element
// The props you can pass to a built-in component are the same attributes
// that the HTML element supports (written in camelCase)

export default function BuiltInProps() {
    return (
        <>
            <h2>BUILT-IN React components: props == HTML attributes</h2>

            {/* <h1> accepts the same attributes as the HTML <h1> element */}
            {/* See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1 */}
            <h1
                id="main-title"
                className="title"
                style={{ color: 'blue' }}
                title="This is a tooltip on hover"
            >
                I'm an h1 — my props are HTML attributes (id, className, style, title)
            </h1>

            {/* <label> accepts the same attributes as the HTML <label> element */}
            {/* See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label */}
            {/* Note: "for" in HTML becomes "htmlFor" in React (camelCase + reserved word) */}
            <label
                htmlFor="my-input"
                className="form-label"
                style={{ fontWeight: 'bold' }}
            >
                I'm a label — "htmlFor" connects me to the input below
            </label>
            <br />
            <input id="my-input" type="text" placeholder="Type here..." />

            {/* ❌ If you pass a prop that is NOT a valid HTML attribute, React warns ❌ */}
            {/* <h1 customProp="hello">This would show a warning in console</h1> */}
        </>
    );
}
