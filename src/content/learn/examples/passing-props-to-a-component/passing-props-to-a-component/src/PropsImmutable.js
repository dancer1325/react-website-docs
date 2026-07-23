// Props are IMMUTABLE / EACH render
// You cannot modify props — React freezes them in development

// 1. Try to reassign a destructured prop (local variable — does nothing to the original)
function ChildDestructured({ name }) {
    const originalName = name;
    name = 'Modified';  // ❌ Only reassigns local variable, NOT the prop
    console.log('Reassigned local variable:', name);       // 'Modified'
    console.log('But original was:', originalName);         // 'Alice'
    // Next render will still receive 'Alice' from parent

    return (
        <div>
            <p>Destructured: name = "{name}" (local reassignment, meaningless)</p>
        </div>
    );
}

// 2. Try to mutate the props object directly
function ChildMutateProps(props) {
    let error = null;
    try {
        props.name = 'Hacked';  // ❌ In dev + StrictMode, props object is frozen
    } catch (e) {
        error = e.message;
    }

    return (
        <div>
            {/* prop NOT modified */}
            <p>Mutate props.name: "{props.name}"</p>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!error && props.name !== 'Hacked' && <p style={{ color: 'orange' }}>Mutation was silently ignored (Object.freeze)</p>}
            {!error && props.name === 'Hacked' && <p style={{ color: 'orange' }}>⚠️ Mutation appeared to work but won't persist across renders</p>}
        </div>
    );
}

// 3. Try to mutate an object inside props
function ChildMutateObjectProp({ user }) {
    let error = null;
    const originalName = user.name;
    try {
        user.name = 'Hacked';  // ❌ In dev + StrictMode, nested objects are also frozen
    } catch (e) {
        error = e.message;
    }

    return (
        <div>
            <p>Mutate user.name: "{user.name}" (original: "{originalName}")</p>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!error && user.name !== 'Hacked' && <p style={{ color: 'orange' }}>Mutation was silently ignored</p>}
        </div>
    );
}

export default function PropsImmutable() {
    return (
        <>
            <h2>Props are IMMUTABLE / EACH render</h2>

            <h3>1. Reassign destructured prop (local variable only)</h3>
            <ChildDestructured name="Alice" />

            <h3>2. Mutate props object directly</h3>
            <ChildMutateProps name="Alice" />

            <h3>3. Mutate object inside props</h3>
            <ChildMutateObjectProp user={{ name: 'Alice', age: 30 }} />

            <p><strong>Conclusion:</strong> React freezes props — you cannot change them. If you need different values, the parent must re-render with new props.</p>
        </>
    );
}
