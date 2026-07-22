import { renderToStaticNodeStream } from 'react-dom/server';
import Button from 'react';

// TODO: what to add for using app?
app.use('/', (request, response) => {
    const stream = renderToStaticNodeStream(<Button />);
    stream.pipe(response);
});
