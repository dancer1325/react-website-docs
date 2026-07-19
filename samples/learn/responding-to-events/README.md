# Event handlers == your OWN functions / triggered -- in response to -- interactions
* [here](my-app/src/EventHandler.js)

# Adding event handlers
* follow the steps
* [here](my-app/src/EventHandler.js)

## Reading props | event handlers
* [here](my-app/src/EventHandler.js)

## Passing event handlers -- as -- props
* [here](my-app/src/EventHandler.js)

## Naming event handler props
* [here](my-app/src/EventHandler.js)

# Event propagation
## event "bubbles" or "propagates" up | tree
* [here](my-app/src/EventPropagation.js)
### ⚠️EXCEPT TO `onScroll`⚠️
* [here](my-app/src/EventPropagation.js)

## Stopping propagation
### event handlers receive 1! argument == event object (`e`)
* [here](my-app/src/EventPropagation.js)
### uses: read information about the event, stop propagation via `e.stopPropagation()`
* [here](my-app/src/EventPropagation.js)

## Capture phase events
### `<EVENT_NAME>Capture` — catch ALL events | child elements
* [here](my-app/src/EventPropagation.js)

## Passing handlers -- as -- ALTERNATIVE to propagation
* [here](my-app/src/EventPropagation.js)
### lets child handle the event, parent specify ADDITIONAL behavior
* [here](my-app/src/EventPropagation.js)
### vs propagation: ❌NOT AUTOMATIC❌== you need to invoke the passed handler
* [here](my-app/src/EventPropagation.js)

## Preventing DEFAULT behavior
### SOME browser events have DEFAULT behavior — `e.preventDefault()` to prevent it
* [here](my-app/src/EventPropagation.js)

# Can event handlers have side effects?
## NORMALLY
TODO:
## vs rendering functions: ❌NOT need to be pure❌
TODO:
