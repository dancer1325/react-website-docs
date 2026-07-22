import { Suspense, useState, useDeferredValue } from 'react';
import './App.css';
import ArtistPage from "./ArtistPage";
import SearchResults from "./SearchResults";

export default function App() {
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    const isStale = query !== deferredQuery;

    return (
        <>
            {/* ===== Section 1: Displaying a fallback while content is loading ===== */}
            {/* ===== Section 2: Revealing content together at once ===== */}
            {/* ===== Section 3: Revealing nested content as it loads ===== */}
            <h2>Sections 1-3: Artist Page (fallback, together, nested)</h2>
            {show ? (
                <ArtistPage
                    artist={{
                        id: 'the-beatles',
                        name: 'The Beatles',
                    }}
                />
            ) : (
                <button onClick={() => setShow(true)}>
                    Open The Beatles artist page
                </button>
            )}

            <hr />

            {/* ===== Section 4: Showing stale content while fresh content is loading ===== */}
            <h2>Section 4: Search (fallback replaces content)</h2>
            <label>
                Search albums:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SearchResults query={query} />
            </Suspense>

            <hr />

            {/* ===== Section 5: Preventing already revealed content from hiding (useDeferredValue) ===== */}
            <h2>Section 5: Search with useDeferredValue (stale content stays visible)</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <div style={{ opacity: isStale ? 0.5 : 1 }}>
                    <SearchResults query={deferredQuery} />
                </div>
            </Suspense>
        </>
    );
}
