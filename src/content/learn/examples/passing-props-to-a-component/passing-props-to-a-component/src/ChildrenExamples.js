// Passing JSX -- as -- children
// `children` := built-in prop / enable capturing nested content | JSX tag

// ===== 1. Visual wrappers =====

// Panel wrapper — adds border and padding around any content
function Panel({ title, children }) {
    return (
        <div style={{ border: '2px solid gray', borderRadius: '8px', padding: '16px', margin: '10px' }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

// Grid wrapper — displays children in a CSS grid
function Grid({ columns, children }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '10px',
            margin: '10px'
        }}>
            {children}
        </div>
    );
}

// ===== 2. Repetitive blocks =====

// Card that always has the same structure (header + content + footer)
// but the content varies
function RepeatableCard({ header, footer, children }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', margin: '10px' }}>
            <div style={{ background: '#f0f0f0', padding: '8px', fontWeight: 'bold' }}>
                {header}
            </div>
            <div style={{ padding: '12px' }}>
                {children}
            </div>
            <div style={{ background: '#f0f0f0', padding: '8px', fontSize: '12px' }}>
                {footer}
            </div>
        </div>
    );
}

export default function ChildrenExamples() {
    return (
        <>
            <h2>children: visual wrappers & repetitive blocks</h2>

            {/* 1. Visual wrappers */}
            <h3>1. Panel (visual wrapper)</h3>
            <Panel title="User Info">
                <p>Name: Alice</p>
                <p>Email: alice@example.com</p>
            </Panel>

            <Panel title="Settings">
                <label><input type="checkbox" /> Dark mode</label>
                <br />
                <label><input type="checkbox" /> Notifications</label>
            </Panel>

            <h3>1. Grid (visual wrapper)</h3>
            <Grid columns={3}>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 1</div>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 2</div>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 3</div>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 4</div>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 5</div>
                <div style={{ background: '#e3f2fd', padding: '10px' }}>Item 6</div>
            </Grid>

            {/* 2. Repetitive blocks */}
            <h3>2. Repetitive blocks (same structure, different content)</h3>
            <RepeatableCard header="Blog Post #1" footer="Published: 2024-01-15">
                <p>This is the content of the first blog post.</p>
            </RepeatableCard>

            <RepeatableCard header="Blog Post #2" footer="Published: 2024-02-20">
                <p>This is the content of the second blog post.</p>
                <p>It has more paragraphs.</p>
            </RepeatableCard>
        </>
    );
}
