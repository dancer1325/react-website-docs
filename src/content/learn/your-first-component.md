---
title: Your First Component
---

* React Component
  * == core concepts of React
  * == foundation -- to build -- UI

* What a component is
* What role components play in a React application
* How to write your first React component

## Components: UI building blocks {/*components-ui-building-blocks*/}

* | Web,
  * 👀HTML lets us create rich structured documents -- via -- its built-in set of tags 👀
    * _Example:_ 

      ```html
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      ```
  * CSS, provides style
  * JS, provides interactivity
  * React components
    * lets
      * HTML + CSS + JS
    * == reusable UI elements -- for -- your app 
    * _Example:_ previous HTML -- could turned into -- `<TableOfContents />`
    * 👀open source community ones 👀
      * [Chakra UI](https://chakra-ui.com/)
      * [Material UI.](https://material-ui.com/)

## Defining a component {/*defining-a-component*/}

### Step 1: Export the component {/*step-1-export-the-component*/}

* `export default` prefix 
  * [standard JavaScript syntax](https://developer.mozilla.org/docs/web/javascript/reference/statements/export)
    * NOT React-specific 
  * see [Importing and Exporting Components](importing-and-exporting-components.md)

### Step 2: Define the function {/*step-2-define-the-function*/}

* requirements
  * FIRST capital letter

## Using a component {/*using-a-component*/}

### Nesting and organizing components {/*nesting-and-organizing-components*/}

* ❌NOT nest React component definitions ❌
  * Reason: 🧠[very slow -> causes bugs](preserving-and-resetting-state.md)
  * Solution: define EVERY component | top level 

#### Components all the way down {/*components-all-the-way-down*/}

* "root" component
  * NORMALLY, created automatically | start a NEW project

* components ALL the way down
  * == components are ALSO used for larger pieces (_Example:_ sidebars, lists, and COMPLETE pages) 

* [React-based frameworks](start-a-new-react-project)
  * generate AUTOMATICALLY -- from your React components, the -- HTML  / != empty HTML file
    * WITHOUT letting React "take over" managing the page 
    * -> show SOME content | BEFORE the JavaScript code loads
