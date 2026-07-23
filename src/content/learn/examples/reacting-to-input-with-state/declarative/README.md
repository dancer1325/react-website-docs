# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* project's goal
  * form / contains a textarea -- to -- submit information

## Steps to think about declaratively
### Step 1: Identify your component's different visual states

* ALLOWED UI states / user might see
  * **Empty**
    * -> disabled "Submit" button
  * **Typing**
    * -> Form has an enabled "Submit" button
  * **Submitting**
    * Form is COMPLETELY disabled
    * Spinner is shown
  * **Success**
    * "Thank you" message is shown
  * **Error**
    * == Typing state + error message

#### Displaying MANY visual states at once

* [here](src/App.js)

### Step 2: Determine what triggers those state changes

* state changes
  * Empty -> Typing
    * -- via -- changing the text input
      * human
  * Typing -> Submitting
    * -- via -- clicking the Submit button
      * human
  * Submitting -> Success
    * -- via -- successful network response
      * computer
  * Submitting -> Failed
    * -- via -- failed network response
      * computer

![](../transitionBetweenStates.png)

### Step 3: Represent the state in memory -- via -- `useState`

* FIRST attempt
  * 1 `useState` / EACH ALLOWED UI state
* PROPER solution
  * less `useState` POSSIBLE

### Step 4: Remove ANY NON-essential state variables

* questions to wonder about state variables
  * **Does this state cause a paradox?**
    * _Example of paradox:_ `isTyping = true` & `isSubmitting = true`
  * **Is the SAME information AVAILABLE | ANOTHER variable ALREADY?**
    * | SAME time, `isEmpty = true` & `isTyping = true`
    * remove `isEmpty` & check `answer.length === 0`
  * **Can you get the SAME information -- from the -- inverse of ANOTHER state variable?**
    * `isError` is NOT needed
      * Reason: `isError` == `error !== null`

#### Eliminating “impossible” states with a reducer

* NO sense: `error` + `status = 'success'`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
