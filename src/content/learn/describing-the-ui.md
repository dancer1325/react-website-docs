---
title: Describing the UI
---

* React
  * 👀== JS library -- for -- rendering UI 👀
    * UI == SEVERAL SMALL units (_Example:_ buttons, text, and images) / combined into React Components

* goal
  * React components, how to
    * create,
    * customize,
    * conditionally display 

* [code](/samples/learn/describingTheUI/describing-the-ui)

## Your first component {/*your-first-component*/}

* React applications
  * == React Components 

* see [here](your-first-component)

## Importing and exporting components {/*importing-and-exporting-components*/}

* SEVERAL React components can be declared | 1! file
  * recommendations
    * 👀export a component | its OWN file + import that component | ANOTHER file 👀

* see [Importing and Exporting Components](importing-and-exporting-components)

## Writing markup with JSX {/*writing-markup-with-jsx*/}

* EACH React component
  * == JS function / MAY contain some markup (HTML)
  * -- via -- JSX == HTML + dynamic information
  
* see [here](writing-markup-with-jsx)

## JavaScript in JSX -- via -- `{}` {/*javascript-in-jsx-with-curly-braces*/}

* JSX 
  * lets you, write
    * HTML-like markup | JS file
    * JS logic or reference a dynamic property | markup -- via -- `{}`

* see [JavaScript in JSX with Curly Braces](javascript-in-jsx-with-curly-braces)

## Passing props to a component {/*passing-props-to-a-component*/}

* React components' props
  * allows
    * React Component1 <- communicate with -> React Component2
    * parent React component -- pass information to -> its children React components 
  * == 👀HTML attributes, BUT ACCEPT
    * objects,
    * arrays,
    * functions,
    * OWN JSX 👀

* see [here](passing-props-to-a-component)

## Conditional rendering {/*conditional-rendering*/}

* ways to render conditionally
  * `if`
  * `&&`
    * allows
      * rendering the NEXT element
  * `? :`

* see [here](conditional-rendering)

## Rendering lists {/*rendering-lists*/}

* use case
  * from a collection of data -- via JS's `map()` -- display MULTIPLE similar components

* array's item
  * requirements
    * `key`
      * == database's ID
      * -> React keep track of EACH item's place | list, ALTHOUGH list changes

* see [here](rendering-lists)

## Keeping components pure {/*keeping-components-pure*/}

* JavaScript pure functions 
  * == OWN business + SameInputsThenSameOutputs
    * OWN business
      * NO change any objects or variables / existed | BEFORE it was called 
    * SameInputsThenSameOutputs
      * if you pass SAME inputs -> ALWAYS return the SAME result
  * allows
    * avoid an entire class of baffling bugs
    * unpredictable behavior | your codebase grows

* see [here](/learn/keeping-components-pure)

## Your UI == tree {/*your-ui-as-a-tree*/}

* React render tree
  * == representation of the relationship parent component -- & -- child components
    * == React models -- via -- trees
  * category of components
    * top-level components
      * == components near the top of the tree == near the root component
    * leaf components
      * 👀== components / NO child components 👀
    * allows
      * understanding data flow
      * rendering performance
  * _Example:_ tree graph / 5 nodes / EACH node == component
    * root node | top the tree graph 
    * 2 IMMEDIATE children
    * EACH arrows is labelled with 'renders'

    ![](/public/images/docs/diagrams/generic_render_tree.png)

* module dependency tree
  * := modelling the relationship between JS modules
  * 'RootModule.js'
    * == top-most node
  * uses
    * by build tools, to bundle ALL relevant JavaScript code -- for the -- client to download & render
    * debugging easily
  * _Example:_ tree graph / 5 nodes / EACH node == JS module
    * EACH arrow is labelled as 'imports' 

  ![](/public/images/docs/diagrams/generic_dependency_tree.png)

* see [Your UI as a Tree](understanding-your-ui-as-a-tree)
