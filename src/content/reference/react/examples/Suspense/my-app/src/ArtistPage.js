import { Suspense } from 'react';
import Albums from './Album.js';
import Biography from './Biography.js';
import Panel from './Panel.js';

// Section 1: Displaying a fallback while content is loading
//   -> <Suspense fallback={...}> wraps async children
// Section 2: Revealing content together at once
//   -> Biography + Albums under same Suspense would reveal together
// Section 3: Revealing nested content as it loads
//   -> Nested Suspense boundaries: Biography loads first, Albums loads later

export default function ArtistPage({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            {/* Section 3: Outer Suspense — shows BigSpinner until Biography loads */}
            <Suspense fallback={<BigSpinner />}>
                <Biography artistId={artist.id} />
                {/* Section 3: Inner Suspense — shows AlbumsGlimmer until Albums loads */}
                <Suspense fallback={<AlbumsGlimmer />}>
                    <Panel>
                        <Albums artistId={artist.id} />
                    </Panel>
                </Suspense>
            </Suspense>
        </>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading entire page...</h2>;
}

function AlbumsGlimmer() {
    return <h2>🌀 Loading albums...</h2>;
}
