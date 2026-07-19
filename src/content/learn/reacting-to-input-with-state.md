---
title: Reacting to Input with State
---

* goal
  * declarative UI vs imperative UI
  * your component's visual states

* React 
  * 's approach
    * define the UI declaratively + DIFFERENT ALLOWED states /
      * switch BETWEEN states -- based on -- user input

## declarative UI vs imperative UI {/*how-declarative-ui-compares-to-imperative*/}

* imperative
  * how to update the UI -- based on -- user actions
  * use cases
    * simple examples

  ![](../../../public/images/docs/illustrations/i_imperative-ui-programming.png)
 
* 💡declarative💡
  * ❌!= manipulate the UI-meaning❌
  * == declare what to show /
    * React figures out how to update the UI
  * React's approach
  * use cases
    * complex UI

  ![](../../../public/images/docs/illustrations/i_declarative-ui-programming.png)

## Thinking about UI declaratively {/*thinking-about-ui-declaratively*/}

### Step 1: Identify your component's different visual states {/*step-1-identify-your-components-different-visual-states*/}

* React's states
  * == ["state machine"](https://en.wikipedia.org/wiki/Finite-state_machine) | computer science + mockups / "visual states" | UX/UI

* steps
  * identify your component's visual states
  * BEFORE adding logic, mock states

#### Displaying MANY visual states at once {/*displaying-many-visual-states-at-once*/}

* "living styleguides" OR "storybooks"
* if a component has a lot of visual states -> show them ALL | 1 page

### Step 2: Determine what triggers those state changes {/*step-2-determine-what-triggers-those-state-changes*/}

* inputs / trigger state updates
  * **Human inputs**

    ![](../../../public/images/docs/illustrations/i_inputs1.png)
    * ⚠️COMMON requirements⚠️
      * [event handlers](responding-to-events.md)

  * **Computer inputs**
    * _Examples:_ network response arriving, a timeout completing, an image loading

    ![](../../../public/images/docs/illustrations/i_inputs2.png)

* steps
  * set [state variables](state-a-components-memory.md#anatomy-of-usestate-anatomy-of-usestate)

* recommendations
  * draw the transition between states

### Step 3: Represent the state in memory -- via -- `useState` {/*step-3-represent-the-state-in-memory-with-usestate*/}

* represent the visual states of your component in memory -- with -- [`useState`.](../reference/react/useState) 

* recommendations
  * less state as possible

### Step 4: Remove ANY NON-essential state variables {/*step-4-remove-any-non-essential-state-variables*/}

* allows
  * easy to understand your components
  * reduce duplication
  * avoid unintended meanings

* questions to wonder about state variables
  * **Does this state cause a paradox?** 
    * paradox usually
      * == state is NOT constrained enough
  * **Is the SAME information AVAILABLE | ANOTHER variable ALREADY?**
    * SOLUTION: make separate state variables
      * OTHERWISE, you risk them
        * out of sync
        * causing bugs
  * **Can you get the SAME information -- from the -- inverse of ANOTHER state variable?**

* essential state variables
  * == state variable /
    * if you remove it -> you break the functionality

#### Eliminating “impossible” states -- with a -- reducer {/*eliminating-impossible-states-with-a-reducer*/}
 
* Reducer
  * allow
    * unify >1 state variables -- into -- 1! object
  * [MORE](extracting-state-logic-into-a-reducer) 
  * uses
    * there are INTERMEDIATE states / do NOT FULLY make sense

### Step 5: Connect the event handlers -- to -- set state {/*step-5-connect-the-event-handlers-to-set-state*/}

* create event handlers /
  * update the state

* ALL interactions 
  * == state changes
