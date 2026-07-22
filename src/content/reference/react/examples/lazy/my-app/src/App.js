import { useState, Suspense, lazy } from 'react';
import Loading from './Loading';
import './App.css';

// 1.
// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

// ===== Usage: Lazy-loading components with Suspense =====
// ✅ Good: Declare lazy components OUTSIDE of your components (top level of module)
// If declared inside, it would reset state on every re-render (see Troubleshooting)
const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

export default function App() {
    const [showPreview, setShowPreview] = useState(false);
    const [markdown, setMarkdown] = useState('Hello, **world**!');

    return (
        <>
            <h2>lazy() + Suspense: Lazy-loading components</h2>

            {/* The textarea is always loaded (static import) */}
            <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={showPreview}
                    onChange={e => setShowPreview(e.target.checked)}
                />
                Show preview (loads MarkdownPreview component on first check)
            </label>

            <hr />

            {/* MarkdownPreview is only loaded when showPreview is true */}
            {/* While loading, <Loading /> is shown as fallback */}
            {/* After first load, it's cached — no loading state on subsequent toggles */}
            {showPreview && (
                <Suspense fallback={<Loading />}>
                    <h2>Preview</h2>
                    <MarkdownPreview markdown={markdown} />
                </Suspense>
            )}

            <hr />

            {/* ===== Troubleshooting: Don't declare lazy inside components ===== */}
            <h3>Troubleshooting note:</h3>
            <p>
                ❌ <code>const X = lazy(...)</code> inside a component = state resets on re-render<br/>
                ✅ <code>const X = lazy(...)</code> at module top level = correct
            </p>
        </>
    );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
