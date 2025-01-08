---
title: JavaScript in JSX with Curly Braces
---

* JSX
  * lets you write HTML-like markup | ".js"
    * -> rendering logic + content | ".js"
  * `{ useJSSyntax }`
    * useJSSyntax enables concatenation, invoke other functions ...

## Using `{}` {/*using-curly-braces-a-window-into-the-javascript-world*/}

* `{ useJSSyntax }`
  * uses
    * BETWEEN opening & closing tag
      * ❌NOT tag itself ❌
      ```
      <someTag>{evaluateSomething}</someTag>
      
      // NOT valid
      <{evaluateTag}>...</{evaluateTag}>
      ```
    * attributes
      ```.js
      < someTag attribute={evaluateSomething} ...
      ```

## Using `{{ }}` {/*using-double-curlies-css-and-other-objects-in-jsx*/}

* `{{ }}`
  * uses
    * pass objects | JSX
      * ❌NOT valid to display objects ❌
    ```
      <someTag attributeName={{someObject}}>...</someTag>
      
      // NOT valid
      <someTag>{{someObject}}</someTag>
      ```
