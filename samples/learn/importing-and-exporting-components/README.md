# use case: split MORE and MORE components | DIFFERENT files
* [here](importing-and-exporting-components)
  * there are MULTIPLE ".js" / are React components

# The root component file: if you use a framework / file-based routing -> DIFFERENT root component / EACH page
* [here](importing-and-exporting-components-nextjs)
  * `npm run dev`
  * | browser,
    * http://localhost:3000
      * == [root page.tsx](importing-and-exporting-components-nextjs/app/page.tsx)
    * http://localhost:3000/about
      * == [root page.tsx](importing-and-exporting-components-nextjs/app/about/page.tsx)
    * http://localhost:3000/blog
      * == [root page.tsx](importing-and-exporting-components-nextjs/app/blog/page.tsx)

# Exporting and importing a component
## migrate a React Component -- to a -> OWN file
* [here](importing-and-exporting-components)
* follow the steps

## Default vs named exports
### POSSIBLE combinations of `export` | 1! file
#### 1! `export default`
* [App](importing-and-exporting-components/src/App.js)
#### SEVERAL named export
* [here](importing-and-exporting-components/src/Footer.js)
#### 1 `export default` + SEVERAL named export
* [here](importing-and-exporting-components/src/Body.js)
### DIFFERENT syntax to export
* [default](importing-and-exporting-components/src/Profile.js)
* [named](importing-and-exporting-components/src/Footer.js)
### `export default` use case: 1! component is exported / file
* [App](importing-and-exporting-components/src/App.js)
