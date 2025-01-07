---
title: Writing Markup with JSX
---

* JSX
  * == syntax extension for JavaScript / 
    * lets you write HTML-like markup | JavaScript file
  * uses
    * write React components
      * 👀ALTHOUGH there are OTHER ways 👀 
      * MOST chosen one -- by -- React developers
        * OTHERWISE, check [here](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform)

## JSX: Putting markup into JavaScript {/*jsx-putting-markup-into-javascript*/}

* Web 
  * | ORIGINALLY,
    * HTML
        ![](/public/images/docs/diagrams/writing_jsx_html.png)
    * JS
      ![](/public/images/docs/diagrams/writing_jsx_js.png)
  * NOWADAYS,
    * | React,
      * 💡JS ALSO in charge of HTML 💡 
        * -> easier stay in sync
        * Reason: 🧠MORE interactive == logic -- INCREASINGLY determines the -- content 🧠

    ![](/public/images/docs/diagrams/writing_jsx_sidebar.png)
    ![](/public/images/docs/diagrams/writing_jsx_form.png)

## Converting HTML -- to -> JSX {/*converting-html-to-jsx*/}

* JSX vs HTML
  * stricter
  * 👀has MORE rules 👀

## The Rules of JSX {/*the-rules-of-jsx*/}

### 1. Return 1! root element {/*1-return-a-single-root-element*/}

* Reason: 🧠
  * JSX == HTML, 
    * BUT, | JSX, they -- are transformed into -- plain JS objects
      * | JS, a function can NOT return 2 objects WITHOUT wrapping them | array 🧠

### 2. Close ALL the tags {/*2-close-all-the-tags*/}

* == tags MUST be explicitly closed
  * self-closing HTML tags -> closing | JSX
    * _Examples:_
      * _Example1:_ | HTML, `<img>` -> | JSX, `<img />`
      * _Example2:_ | HTML, `<li>oranges` -> `<li>oranges</li>`

### 3. camelCase <s>all</s> MOST of the things! {/*3-camelcase-salls-most-of-the-things*/}

* | JSX, attributes
  * 👀-> | JS, objects' keys 👀
    * uses
      * read into variables
  * -- via -- camelCase or refactored
    * _Examples:_
      * _Example1:_ | HTML, `stroke-width` -> | JSX, `strokeWidth`
      * _Example2:_ | HTML, `class` -> | JSX, `className` ([`className` DOM property](https://developer.mozilla.org/en-US/docs/Web/API/Element/className))
    * Reason: 🧠JavaScript restricts variable names 🧠
      * _Example:_ variable names can NOT contain dashes or be reserved words (`class`)
    * ⚠️EXCEPTION ⚠️ (| JSX, attributes == | HTML, attributes)
      * [`aria-*`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)
      * [`data-*`](https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes) 
  * see [here](../reference/react-dom/components/common) 

### Pro-tip: Use a JSX Converter {/*pro-tip-use-a-jsx-converter*/}
 
* [HTML & SVG -- converter to -> JSX](https://transform.tools/html-to-jsx)
  * ALSO attributes 
