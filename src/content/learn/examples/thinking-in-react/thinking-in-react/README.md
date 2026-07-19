# Thinking-in-react

* [thinking-in-react](/src/content/learn/thinking-in-react.md)

## How was it created?

* `npx create-react-app thinking-in-react`

## How to run?

* `npm run start`
* | your browser, open [http://localhost:3000](http://localhost:3000)

## Notes
* JSON API / returns

    ```json
    [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
    ```

* components | screen
  * identify them

    ![](/public/images/docs/s_thinking-in-react_ui_outline.png)
    * `FilterableProductTable`
      * (grey) ENTIRE app
    * `SearchBar`
      * (blue) receives the user input
    * `ProductTable`
      * (lavender) displays and filters the list -- according to the -- user input
      * 's headers do NOT have its OWN component
        * Reason: 🧠 SIMPLE functionality 🧠
        * 👀if it becomes complex -> you can move it into its OWN `ProductTableHeader` component 👀
    * `ProductCategoryRow`
      * (green) displays a heading / EACH category
    * `ProductRow`
      * (yellow) displays a row / EACH product
  * set components hierarchy
    * `FilterableProductTable`
      * `SearchBar`
      * `ProductTable`
          * `ProductCategoryRow`
          * `ProductRow`

* way of thinking to identify the state
  * pieces of information
    1. The original list of products
    2. The search text / user enters
    3. The value of the checkbox
    4. The filtered list of products
  * meet state requirements
    * changes over time
      * -> pass
        1. The search text / user enters
        2. The value of the checkbox
        3. The filtered list of products
    * NOT passed -- from -- parent component
      * -> pass
        1. The search text / user enters
        2. The value of the checkbox
        3. The filtered list of products
    * NOT computed -- based on -- EXISTING states or props
      * -> pass
        1. The search text / user enters
        2. The value of the checkbox

* way of thinking to identify the component(s) / own the states
  * identify ALL components / based on state -> renders something
    1. `ProductTable`
    2. `ProductCategoryRow`
    3. `ProductRow`
    4. `SearchBar` -- displays that state -- 
  * find their closest COMMON parent component
    1. `FilterableProductTable`
  * decide the component / recommended
    1. `FilterableProductTable`