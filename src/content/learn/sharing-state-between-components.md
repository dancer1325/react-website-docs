---
title: Sharing State Between Components
---

* lifting state up
  * 👀:= process / state of 2 components ALWAYS change together 👀
    * steps
      * remove state | BOTH of them 
      * move state -> their CLOSEST COMMON parent
        * == child component has NO control over the value
        * 👀can CHANGE the nature of the state 👀
      * pass it down -- via props, to -- them 
  * VERY COMMON | writing React code

* goal
  * share state between components -- by -- lifting it up
  * controlled and uncontrolled components

## Lifting state up by example {/*lifting-state-up-by-example*/}

* _Example:_ [here](/samples/learn/managingState/sharing-state-between-components)

#### Controlled and uncontrolled components {/*controlled-and-uncontrolled-components*/}

* "controlled" & "uncontrolled"
  * ⚠️NOT strict technical terms ⚠️
    * Reason: 🧠EACH component -- usually has -- SOME mix of local state + props 🧠
  * ⚠️== way to talk about how components are designed ⚠️


* "uncontrolled" component
  * == component / local state 
    * == ❌ parent can NOT influence | child component's state ❌
  * easier to use | their parents
    * Reason: 🧠 require LESS configuration 🧠
  * if you want to coordinate them together -> LESS flexible 
  * _Example:_ `Panel`'s state | PREVIOUS example's ORIGINAL situation

* "controlled" component 
  * == component / it's IMPORTANT information -- is driven by -- props 
    * != local state
    * == state -- is specified by -- parent component
  * MAXIMALLY flexible
  * MORE configuration -- by the -- parent component
  * _Example:_ `Panel`'s state | PREVIOUS example's AFTER lifting state up situation -- is controlled by -- `AccordionLiftingStateUp` component

* recommendations | writing a component
  * consider which information -- should be --
    * controlled (== -- via -- props)
    * uncontrolled (== -- via -- state) 

## A single source of truth for each state {/*a-single-source-of-truth-for-each-state*/}

* | React application,
  * MANY components have THEIR OWN state /
    * SOME state may "live" | close to the leaf components ( == components | bottom of the tree)
    * OTHER state may "live" | closer to the top of the app
    * _Example:_ client-side routing libraries -- are usually implemented by -- storing the CURRENT route | React state / it's passed it down -- by -- props

* EACH UNIQUE piece of state -> has a component / "owns" it
  * == ["single source of truth"](https://en.wikipedia.org/wiki/Single_source_of_truth)
  * == 1 SPECIFIC component / holds EACH piece of state  
  * != state lives | 1! place
  * POSSIBLE solutions
    * duplicate shared state | SEVERAL components
    * 💡lift state up 💡
      * chosen one
