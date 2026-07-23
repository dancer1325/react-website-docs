// ALLOWED values: ANY JS value (objects, arrays, functions)

// 1. Object as prop
function UserCard({ user }) {
    return (
        <div>
            <h4>{user.name}</h4>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

// 2. Array as prop
function TagList({ tags }) {
    return (
        <ul>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    );
}

// 3. Function as prop
function Button({ onClick, label }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

export default function PropAnyJSValue() {
    // Object
    const user = { name: 'Alice', age: 30, email: 'alice@example.com' };

    // Array
    const tags = ['React', 'JavaScript', 'Frontend'];

    // Function
    function handleClick() {
        alert('Function passed as prop!');
    }

    return (
        <>
            <h2>ALLOWED values: ANY JS value</h2>

            <h3>1. Object as prop</h3>
            <UserCard user={user} />

            <h3>2. Array as prop</h3>
            <TagList tags={tags} />

            <h3>3. Function as prop</h3>
            <Button onClick={handleClick} label="Click me" />
        </>
    );
}
