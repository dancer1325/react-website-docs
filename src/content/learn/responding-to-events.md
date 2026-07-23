---
title: Responding to Events
---

* goal
  * DIFFERENT ways to write an event handler
  * How from a parent component -- to pass -- event handling logic 
  * How events
    * propagate
    * to stop them

* React 
  * lets you
    * add event handlers | your JSX

* Event handlers
  * == your OWN functions / triggered -- in response to -- interactions (_Example:_ clicking, hovering, focusing form inputs, ...)

## Adding event handlers {/*adding-event-handlers*/}

* steps
  * define a function
    * ways to write it
      * named function | OWN React Component
      * inline function | JSX
        * recommended | short functions
    * 's naming: `handleEventName`
  * [pass it as a prop](passing-props-to-a-component) | appropriate JSX tag
    * ⚠️pass != invoke ⚠️
      * if you invoke it -> fires the function | [rendering](render-and-commit) == WITHOUT waiting for event triggered
        * Reason: 🧠execute | rendering, because [`{JSCode}` | JSX](javascript-in-jsx-with-curly-braces) is WHEN it's executed 🧠

### Reading props | event handlers {/*reading-props-in-event-handlers*/}

* event handlers 
  * have access -- to the -- component's props
    * Reason: 🧠event handlers are declared | component 🧠  

### Passing event handlers -- as -- props {/*passing-event-handlers-as-props*/}

* use case 
  * parent component -- specifies a -- child's event handler 
    * used | [design system](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969)

### Naming event handler props {/*naming-event-handler-props*/}

* if you're building your OWN components -> freedom to name their event handler props
  * recommendations
    * `onFollowedByACapitalLetter`
    * 👀if 1 component supports MULTIPLE interactions -> you might name event handler props -- for -- app-specific concepts 👀

## Event propagation {/*event-propagation*/}

* 💡event "bubbles" OR "propagates" up | tree 💡
  * == 
    * starts | event happened
    * goes up the tree
  * ⚠️EXCEPT TO, `onScroll` ⚠️
    * Reason: 🧠 ONLY work | JSX tag | you attach it to 🧠
  * -> event handlers
    * catch events -- from -- 👀ANY children of YOUR component 👀

### Stopping propagation {/*stopping-propagation*/}

* event handlers
  * 👀receive 1! argument 👀
    * -- named as -- **event object**
    * by convention, `e`
      * == "event"
    * uses
      * read information about the event
      * stop the propagation -- via -- `e.stopPropagation()`

#### Capture phase events {/*capture-phase-events*/}

* allow
  * catch ALL events | child elements

* steps
  * `<EVENT_NAME>Capture`

* use cases
  * routers OR analytics

### Passing handlers -- as -- ALTERNATIVE to propagation {/*passing-handlers-as-alternative-to-propagation*/}

* == pattern / 
  * lets
    * child component
      * handle the event
    * parent component
      * can specify SOME ADDITIONAL behavior
  * vs propagation
    * ❌NOT AUTOMATIC❌ 
      * == you need to invoke the passed handler
  * allow
    * follow the whole chain of code / executes -- as a -- result of some event
  * recommendations
    * stop propagation
      * Reason: 🧠MANUAL event bubble up control🧠
  * use cases
    * you rely on propagation & difficult to trace the handlers / execute & why

### Preventing DEFAULT behavior {/*preventing-default-behavior*/}

* SOME browser events
  * 👀have DEFAULT behavior / associated -- with -- them👀
    * if you want to prevent it -> [`<EVENT_OBJECT>.preventDefault()`](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
      * != [`<EVENT_OBJECT>.stopPropagation()`](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

## Can event handlers have side effects? {/*can-event-handlers-have-side-effects*/}

* Event handlers
  * NORMALLY have side effects
  * vs rendering functions
    * ❌NOT need to be [pure](keeping-components-pure)❌ 
  * use case
    * change something -- in response to -- something
