---
title: Add React to an Existing Project
---

* goal
  * add some interactivity | your EXISTING project

* requirements
  * [Node.js](https://nodejs.org/en/) for local development

## Using React | ENTIRE EXISTING website's subroute {/*using-react-for-an-entire-subroute-of-your-existing-website*/}

* use case
  * EXISTING web app / 
    * built with ANOTHER server technology
    * you want to implement SOME routes FULLY with React

* steps
  1. **Build the React part of your app** -- via -- one of the [React-based frameworks](start-a-new-react-project)
  2. **Specify `/some-app` -- as the -- *base path*** | your framework's configuration
     1. _Examples:_ [Next.js](https://nextjs.org/docs/api-reference/next.config.js/basepath), [Gatsby](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)
  3. **Configure your server or a proxy** / ALL requests | that base path -> handled by your React app

## Using React | part of your EXISTING page {/*using-react-for-a-part-of-your-existing-page*/}

* use case
  * EXISTING page / 
    * built with ANOTHER technology (_Example:_ server one like Rails, or a client one like Backbone)
    * you want to render interactive React components | that page

* showcases
  * use of React | Meta | MANY years

* steps
  1. **Set up a JavaScript environment** / lets you
     1. use the [JSX syntax](/learn/writing-markup-with-jsx),
     2. split your code -- , via [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) / [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), into -- modules 
     3. use packages (_Example:_ React) -- from the -- [npm](https://www.npmjs.com/) package registry
  2. **Render your React components** where you want to see them on the page.

* approach -- depends on your -- EXISTING page setup

### Step 1: Set up a modular JavaScript environment {/*step-1-set-up-a-modular-javascript-environment*/}

* modular JavaScript environment
  * lets you 
    * write your React components | SEVERAL individual files

* steps
  * write `<div />` | your JS code
  * if it causes a syntax error ->
    * [transform your JS code -- via -- Babel](https://babeljs.io/setup),
    * enable the [Babel React preset](https://babeljs.io/docs/babel-preset-react) -- to use -- JSX
  * if your app does NOT have an EXISTING setup for compiling JavaScript modules -> set it up -- with -- [Vite](https://vitejs.dev/)

* TODO:
To check whether your setup works, run this command in your project folder:

<TerminalBlock>
npm install react react-dom
</TerminalBlock>

Then add these lines of code at the top of your main JavaScript file (it might be called `index.js` or `main.js`):

<Sandpack>

```html index.html hidden
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <!-- Your existing page content (in this example, it gets replaced) -->
  </body>
</html>
```

```js src/index.js active
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

</Sandpack>

If the entire content of your page was replaced by a "Hello, world!", everything worked! Keep reading.

<Note>

Integrating a modular JavaScript environment into an existing project for the first time can feel intimidating, but it's worth it! 
If you get stuck, try our [community resources](/community) or the [Vite Chat](https://chat.vitejs.dev/).

</Note>

### Step 2: Render React components anywhere on the page {/*step-2-render-react-components-anywhere-on-the-page*/}

In the previous step, you put this code at the top of your main file:

```js
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

Of course, you don't actually want to clear the existing HTML content!

Delete this code.

Instead, you probably want to render your React components in specific places in your HTML. 
Open your HTML page (or the server templates that generate it) and add a unique [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) attribute to any tag, for example:

```html
<!-- ... somewhere in your html ... -->
<nav id="navigation"></nav>
<!-- ... more html ... -->
```

This lets you find that HTML element with [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) and pass it to [`createRoot`](/reference/react-dom/client/createRoot) so that you can render your own React component inside:

<Sandpack>

```html index.html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <p>This paragraph is a part of HTML.</p>
    <nav id="navigation"></nav>
    <p>This paragraph is also a part of HTML.</p>
  </body>
</html>
```

```js src/index.js active
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```

</Sandpack>

Notice how the original HTML content from `index.html` is preserved, but your own `NavigationBar` React component now appears inside the `<nav id="navigation">` from your HTML. 
Read the [`createRoot` usage documentation](/reference/react-dom/client/createRoot#rendering-a-page-partially-built-with-react) to learn more about rendering React components inside an existing HTML page.

When you adopt React in an existing project, it's common to start with small interactive components (like buttons), and then gradually keep "moving upwards" until eventually your entire page is built with React. 
If you ever reach that point, we recommend migrating to [a React framework](/learn/start-a-new-react-project) right after to get the most out of React.

## Using React Native | EXISTING native mobile app {/*using-react-native-in-an-existing-native-mobile-app*/}

* [React Native](https://reactnative.dev/) can also be integrated incrementally | EXISTING native apps
  * see [this guide](https://reactnative.dev/docs/integration-with-existing-apps)
