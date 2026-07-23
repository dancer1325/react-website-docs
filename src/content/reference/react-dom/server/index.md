---
title: Server React DOM APIs
---

* `react-dom/server` APIs
  * let you
    * render React components -- to -- HTML | server
  * uses
    * | server | top level of your app
      * Reason:🧠generate the INITIAL HTML🧠
    * -- by a -- [framework](../../../learn/start-a-new-react-project.md#production-grade-react-frameworks-production-grade-react-frameworks)
  * ❌NOT uses❌
    * by MOST of your components

## Server APIs -- for -- Node.js Streams {/*server-apis-for-nodejs-streams*/}

* == methods / 
  * ⚠️ONLY AVAILABLE | environments / have [Node.js Streams](https://nodejs.org/api/stream.html)⚠️
  * are
    * [`renderToPipeableStream`](renderToPipeableStream) 
    * [`renderToStaticNodeStream`](renderToStaticNodeStream)

## Server APIs -- for -- Web Streams {/*server-apis-for-web-streams*/}

* == methods /
  * ⚠️ONLY AVAILABLE | environments / have [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) ⚠️
    * _Example:_ contain browsers + Deno + SOME MODERN edge runtimes
  * are
    * [`renderToReadableStream`](renderToReadableStream)

## Server APIs -- for -- NON -streaming environments {/*server-apis-for-non-streaming-environments*/}

* == methods /
  * ⚠️ONLY AVAILABLE | environments / NOT support streams ⚠️
  * are
    * [`renderToString`](renderToString) 
    * [`renderToStaticMarkup`](renderToStaticMarkup)
  * vs [streaming APIs](#server-apis----for----web-streams-server-apis-for-web-streams)
    * ⚠️limited functionality⚠️

## Deprecated server APIs {/*deprecated-server-apis*/}

* == methods / 
  * | FUTURE major version of React,
    * they will be removed
  * [`renderToNodeStream`](renderToNodeStream)
