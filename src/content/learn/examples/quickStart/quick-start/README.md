# Quick start

* [Quick start](/src/content/learn/quickStart.md)

## How was it created?

* `npx create-react-app quick-start`

## How to run?

* `npm run start`
* | your browser, open [http://localhost:3000](http://localhost:3000)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

* files / MUST exist with these concrete names
  * `public/`
    * `public/index.html`
      * ONLY can use files | `public`
    * NOT included -- for -- production
  * `src/index.js`
    * == JS entry point

* OTHER files
  * can be deleted or rename

* `src/`
  * subdirectories can be created
    * Reason: 🧠 faster rebuilds 🧠
  * 👀by default, ONLY files / processed by Webpack 👀