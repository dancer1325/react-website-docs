import { renderToString } from 'react-dom/server';
import App from "./App";

// The route handler syntax depends on your backend framework
app.use('/', (request, response) => {
    const html = renderToString(<App />);
    response.send(html);
});