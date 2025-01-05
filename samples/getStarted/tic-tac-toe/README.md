# Tic-tac-toe

* [tic-tac-toe](/src/content/learn/tutorial-tic-tac-toe.md)

## How was it created?

* `npx create-react-app quick-start`

## How to run?

* `npm run start`
* | your browser, open [http://localhost:3000](http://localhost:3000)

## Notes
* `history`
  * == `[]` / represents ALL board states
    * _Example:_

        ```jsx
        [
          // BEFORE FIRST move
          [null, null, null, null, null, null, null, null, null],
          // AFTER FIRST move
          [null, null, null, null, 'X', null, null, null, null],
          // AFTER SECOND move
          [null, null, null, null, 'X', null, null, null, 'O'],
          // ...
        ]
        ```
