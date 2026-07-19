# React Component == core concepts of React, foundation -- to build -- UI
* [here](your-first-component/src/App.js)

# Components: UI building blocks
## React components lets HTML + CSS + JS == reusable UI elements -- for -- your app
* [here](your-first-component/src/App.js)
## open source community ones (Chakra UI, Material UI)
* [here](community-component-libraries)
  * TODO: add to use Chakra UI, Material UI

# Defining a component
* follow the steps
* [here](your-first-component/src/App.js)

# Using a component
## Nesting and organizing components
### ❌NOT nest React component definitions❌
* [App.js](your-first-component/src/App.js)
### Components all the way down
#### "root" component — created automatically | start a NEW project
* [App.js](skeleton-app/src/App.js)
### ALL are React components
* [here](your-first-component)
  * ALL the visualized content are React components 
#### React-based frameworks generate AUTOMATICALLY HTML -- from -- React components
* [here](generatehtmlfromreactcomponents)
  * `npm run build`
    * see generated .html | [.next/server/app](generatehtmlfromreactcomponents/.next/server/app)
##### -> show SOME content | BEFORE the JavaScript code loads
* | browser, disable JS load
  * refresh http://localhost:3000/about AND STILL show the content
