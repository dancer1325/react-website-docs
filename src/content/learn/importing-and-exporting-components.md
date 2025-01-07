---
title: Importing and Exporting Components
---

* use case
  * split MORE and MORE components | DIFFERENT files

## The root component file {/*the-root-component-file*/}

* 👀if you use a framework / file-based routing (_Example:_ Next.js) -> DIFFERENT root component / EACH page 👀

## Exporting and importing a component {/*exporting-and-importing-a-component*/}

* migrate a React Component -- to a -> OWN file
  1. create a NEW JS file
  2. `export` your function component -- via -- either 
     * [default export](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export) or
     * [named export](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_named_exports)
  3. `import` | file / you’ll use the component -- via the -- corresponding technique 
     * [default import](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#importing_defaults) or 
     * [named import](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#import_a_single_export_from_a_module)

### Default vs named exports {/*default-vs-named-exports*/}

* POSSIBLE combinations of type of `export` | 1! file
  * 1! `export default`
  * SEVERAL named export
  * 1 export default + SEVERAL named export
  ![Default and named exports](/public/images/docs/illustrations/i_import-export.svg)

* ⚠️based on way to export -> dictates how you MUST import it ⚠️
  * if you use 
    * default export -> you import
      * -- via using -- AnyName
      * WITHOUT using `{}`
    * named export -> you MUST import `{ SpecificName }`

| Syntax           | Export statement                           | Import statement                          |
| -----------      | -----------                                | -----------                               |
| Default  | `export default function Button() {}` | `import Button from './Button.js';`     |
| Named    | `export function Button() {}`         | `import { Button } from './Button.js';` |

* `export default`
  * use cases
    * 1! component is exported / file

* recommendations
  * use 1! type of export
  * NO mix BOTH | SAME file
