---
title: Rendering Lists
---

* goal
  * from an array  -- via 
    * `map()` -- render components 
    * `filter()` -- render ONLY specific components 
  * when and why to use React keys

* use case
  * from a collection of data -> display MULTIPLE SIMILAR components

* recommendations
  * 👀assign proper keys | build dynamic lists 👀
    * if key is NOT specified -> React will
      * report an error
      * , by default, use the array index
        * -> ⚠️ problems | ⚠️
          * re-order a list's items or
          * inserting/removing list items 
    * if you pass `key={i}` ->
      * silences the error
      * SAME problems as BEFORE -> NOT recommended

## Rendering data from arrays {/*rendering-data-from-arrays*/}

* steps
  1. place the data | array
  2. []ofItems -- is mapped to -- []ofJSXNodes, `listItems`:
  3. use them

## Keeping list items / in order -- via -- `key` {/*keeping-list-items-in-order-with-key*/}

* `key`
  * 👀== attribute | EACH []'s item / 👀
    * string or number
    * -> UNIQUELY identifies it vs OTHER []'s items
      * == fileName | folder
  * ⚠️required ⚠️ 
    * | JSX elements | `map()` 
    * if your array items can move / reorder / insert
      * Reason: 🧠React knows the relation array item <- & -> component 🧠
        * -> React can update DOM tree
  * recommendations
    * include | your data models
      * ⚠️NOT created them | fly ⚠️
  * if you need to display SEVERAL DOM nodes / EACH list item -> wrap AS alway -- via -- 
    * `<div>` or
    * `<Fragment>`
      * ⚠️shortcut `<>`, does NOT accept attributes ⚠️
  * 👀NOT shared -- via -- props 👀
    * Reason: 🧠ONLY used by internally by React 🧠

### Where to get your `key` {/*where-to-get-your-key*/}

* ways
  * Data -- from a -- database 
    * -> use the database keys/IDs -- as -- `key`
  * LOCALLY generated data
    * -- via --
      * [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
      * [`uuid`](https://www.npmjs.com/package/uuid)

### Rules of keys {/*rules-of-keys*/}

* Keys MUST be UNIQUE | siblings
  * HOWEVER, POSSIBLE SAME keys / JSX nodes | DIFFERENT arrays
* Keys MUST NOT change
  * ❌== NOT generate them | rendering ❌
  * Reason: 🧠React can follow elements | DIFFERENT renders -> ⚠️React will recreate ALL DOM / EVERY TIME ⚠️ 🧠
