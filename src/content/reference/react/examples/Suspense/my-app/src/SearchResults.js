import { fetchData } from './data.js';

// Section 4: Showing stale content while fresh content is loading
// Section 5: Preventing already revealed content from hiding (useDeferredValue)

export default function SearchResults({ query }) {
    if (query === '') {
        return null;
    }
    const albums = use(fetchData(`/search?q=${query}`));
    if (albums.length === 0) {
        return <p>No matches for <i>"{query}"</i></p>;
    }
    return (
        <ul>
            {albums.map(album => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}

// Workaround for `use()` — replace with React.use() when stable
function use(promise) {
    if (promise.status === 'fulfilled') {
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else if (promise.status === 'pending') {
        throw promise;
    } else {
        promise.status = 'pending';
        promise.then(
            result => {
                promise.status = 'fulfilled';
                promise.value = result;
            },
            reason => {
                promise.status = 'rejected';
                promise.reason = reason;
            },
        );
        throw promise;
    }
}
