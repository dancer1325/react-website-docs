// This component is lazy-loaded — its code is NOT included in the initial bundle
// It only loads when it's rendered for the first time

export default function MarkdownPreview({ markdown }) {
    // Simulate a "heavy" component that you don't want in the initial bundle
    return (
        <div className="content">
            <h3>Preview:</h3>
            <p>{markdown}</p>
        </div>
    );
}
