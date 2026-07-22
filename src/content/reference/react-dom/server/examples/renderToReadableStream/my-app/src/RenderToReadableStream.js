import { renderToReadableStream } from 'react-dom/server';

async function handler(request) {
    const stream = await renderToReadableStream(<App />, {
        bootstrapScripts: ['/main.js']
    });
    return new Response(stream, {
        headers: { 'content-type': 'text/html' },
    });
}