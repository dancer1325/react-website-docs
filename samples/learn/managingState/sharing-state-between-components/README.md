# Sharing state between components

* [Sharing state between components](/src/content/learn/sharing-state-between-components.md)

## How was it created?

* `npx create-react-app sharing-state-between-components`

## Context
* scenario
    * parent `Accordion` component / renders 2 SEPARATE-INDEPENDENT `Panel`S components
        * SEPARATE-INDEPENDENT == if you press 1 panel's button -> does NOT affect the other panel
    * EACH `Panel` component / has a boolean `isActive` state / determines whether its content is visible
    * steps
        * INITIALLY
            * BOTH Panel components / `isActive=false` == collapsed
              ![](/public/images/docs/diagrams/sharing_state_child.png)
        * AFTERWARD,
            * FIRST child Panel component is clicked == `isActive=true`
            * SECOND Panel component / `isActive=false`
              ![](/public/images/docs/diagrams/sharing_state_parent.png)
              ![](/public/images/docs/diagrams/sharing_state_parent_clicked.png)

* goal
    * ONLY 1 panel is expanded (== active) | ANY given time
        * SOLUTION: "lift their state up" | parent component -- via --
            1. remove child components' state
            2. from the common parent -- pass -- hardcoded data
            3. add state | COMMON parent & pass it + event handlers -- down together to -- child components

## How to "lifting state up" ?
* `Accordion` -- will be refactored to -- `AccordionLiftingStateUp`
* steps
  * Step 1: Remove child components' state
    * `Panel`'s `isActive` control -- is given to -- its parent component /
      * parent -- will pass, via prop, to -- its child components
  * Step 2: Pass hardcoded data -- from the -- COMMON parent
    * `Accordion` == CLOSEST COMMON parent
  * Step 3: Add state | COMMON parent
    * COMMON parent component -- needs to keep track -- WHICH panel is the active one
      * -> state -- can be changed to a -- number

## How to run?

* `npm run start`
* | your browser, open [http://localhost:3000](http://localhost:3000)


## Notes
* Additional lifting state up
  * `SyncedInputs`
  * `FilterableListLiftingStateUp`