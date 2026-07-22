---
title: renderToStaticNodeStream
---

* `renderToStaticNodeStream` 
  * renders a 
    * NON-interactive React tree -- to a -- [Node.js Readable Stream](https://nodejs.org/api/stream.html#readable-streams)

## Reference {/*reference*/}

### `renderToStaticNodeStream(reactNode, options?)` {/*rendertostaticnodestream*/}

* stream
  * produces
    * ❌NON-interactive HTML output -- of -- your React components❌
      * if you want interactive apps -> use [`renderToPipeableStream`](renderToPipeableStream) | server + [`hydrateRoot`](../client/hydrateRoot) | client

#### Parameters {/*parameters*/}

* `reactNode`
  * == React node /
    * you want to render -- to -- HTML

* `options?`
  * == object -- for -- server render
    * `identifierPrefix: string`
      * uses
        * | use MULTIPLE roots | SAME page, 
          * avoid conflicts
          * _Example:_ EACH root generates IDs -- by -- [`useId`](../../react/useId)
  * OPTIONAL 

#### Returns {/*returns*/}

* [Node.js Readable Stream](https://nodejs.org/api/stream.html#readable-streams) /
  * == byte stream / encoded | utf-8
    * * if you need a stream | ANOTHER encoding -> see [iconv-lite](https://www.npmjs.com/package/iconv-lite)
  * outputs an HTML string /
    * ❌can NOT be hydrated | client❌
    * BEFORE being returned, this method wait for completing ALL [Suspense boundaries](../../react/Suspense)

#### Caveats {/*caveats*/}

* | React v18+,
  * ⚠️buffers ALL its output⚠️
    * -> NOT provide any streaming benefits

## Usage {/*usage*/}

### Rendering a React tree -- , as static HTML, to a -- Node.js Readable Stream {/*rendering-a-react-tree-as-static-html-to-a-nodejs-readable-stream*/}

* output Node.js Readable Stream
  * can be piped -- to -- your server response

### Rendering completely static content

* _Example:_ emails
