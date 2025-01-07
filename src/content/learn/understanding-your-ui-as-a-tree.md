---
title: Understanding Your UI as a Tree
---

* goal
  * how to create a render & module dependency trees -- for a -- React app
    * -> useful mental models -- for -- improving user experience and performance

* 👀React models UI -- as a -- tree 👀
  * allows
    * keeping track of your app's component structure (== relationship between components)
    * help you debug performance and state management

* [code](/samples/learn/describingTheUI/understanding-your-ui-as-a-tree)

## Your UI as a tree {/*your-ui-as-a-tree*/}

* Trees
  * := relationship model BETWEEN items -- & -- UI 
  * use cases
    * browsers use tree structures -- to -- model 
      * HTML ([DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)) 
      * CSS ([CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model))
    * Mobile platforms use trees -- to represent -- their view hierarchy

* _Example:_ transiction of 3 components -- due to the action of -- React & React DOM
  * last one == wireframe of a browser / has a tree of 8 nodes / 3 highlighted 
  ![](/public/images/docs/diagrams/preserving_state_dom_tree.png)

## The Render Tree {/*the-render-tree*/}

* render tree
  * 👀:= | render a React app, model the relationship between React components 👀
    * see 
      * [nest components](your-first-component.md#nesting-and-organizing-components-nesting-and-organizing-components)
      * [root component](importing-and-exporting-components.md#the-root-component-file-the-root-component-file) 
    * 👀EACH node == React component 👀
    * arrows 
      * point from a parent component -- to a -> child component
      * types
        * solid == ALWAYS render
        * dashed == conditional render
  * == UI tree == SEVERAL rendered components 

* _Example:_ Tree graph / 5 nodes
  * 'App' is the root

    ![](/public/images/docs/diagrams/render_tree.png)

* _Example:_ From PREVIOUS example / applies conditional rendering
  ![](/public/images/docs/diagrams/conditional_render_tree.png)

## The Module Dependency Tree {/*the-module-dependency-tree*/}

* app's module dependencies
  * -- due to -- [break up OUR components | separate files](importing-and-exporting-components.md#exporting-and-importing-a-component-exporting-and-importing-a-component)
    * == [JS modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
  * EACH node == module
  * arrow == `import` statement
  * uses
    * determine the modules / necessary to run your React app -> 
      * used by bundlers
      * for debugging
  * _Example:_ 
    ![](/public/images/docs/diagrams/module_dependency_tree.png) 

* bundle size
  * as your app grows -> often the bundle size does too
  * ⚠️if it's large -> ⚠️ 
    * expensive for a client to download and run
    * delay the time for your UI to get drawn  
