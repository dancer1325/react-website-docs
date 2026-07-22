---
title: React Reference Overview
---

* goal
  * React reference documentation

## React {/*react*/}

* Programmatic React features
  * [Hooks](hooks)
  * [Components](components)
  * [APIs](apis)
  * [Directives](../rsc/directives)

## React DOM {/*react-dom*/}

* React-dom's features 
  * ⚠️ONLY supported | web applications⚠️ 
    * == run | browser DOM environment
  * are
    * [Hooks](../react-dom/hooks)
    * [Components](../react-dom/components) 
    * [APIs](/reference/react-dom) TODO: The `react-dom` package contains methods supported only in web applications.
    * [Client APIs](../react-dom/client) - The `react-dom/client` APIs let you render React components on the client (in the browser).
    * [Server APIs](../react-dom/server) - The `react-dom/server` APIs let you render React components to HTML on the server.

## Rules of React {/*rules-of-react*/}

React has idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications:

* [Components and Hooks must be pure](/reference/rules/components-and-hooks-must-be-pure) – Purity makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.
* [React calls Components and Hooks](/reference/rules/react-calls-components-and-hooks) – React is responsible for rendering components and hooks when necessary to optimize the user experience.
* [Rules of Hooks](/reference/rules/rules-of-hooks) – Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

## Legacy APIs {/*legacy-apis*/}

* [Legacy APIs](/reference/react/legacy) - Exported from the `react` package, but not recommended for use in newly written code.
