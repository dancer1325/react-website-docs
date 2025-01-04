---
title: Start a New React Project
---

* recommendations
  * 👀if you want to build a NEW app or a NEW website FULLY with React -> pick one of the React-powered frameworks 👀
    * Reason: 🧠 avoid addressing common problems / out of scope of React (split code / EACH route, routing, data fetching, generate HTML, ...) 🧠
      * == Svelte & SvelteKit, Vue & Nuxt

## Can I use React WITHOUT a framework? {/*can-i-use-react-without-a-framework*/}

* Yes
  * see [use React | part of your page](add-react-to-an-existing-project) 
  * add `react` & `react-dom`
  * set up your custom build process -- with a -- bundler (_Example:_ [Vite](https://vitejs.dev/) or [Parcel](https://parceljs.org/))
  * add other tools -- as you -- need them 
    * _Example:_ for routing, static generation or server-side rendering, ...

## Production-grade React frameworks {/*production-grade-react-frameworks*/}

* These frameworks 
  * support ALL features -- to -- deploy and scale your app | production
  * 👀are working -- towards supporting -- OUR [full-stack architecture vision](#which-features-make-up-the-react-teams-full-stack-architecture-vision-which-features-make-up-the-react-teams-full-stack-architecture-vision) 👀 
  * open source
  * active communities
  * can be deployed | 
    * your own server or
    * hosting provider

### Next.js {/*nextjs-pages-router*/}

* [Next.js' Pages Router](https://nextjs.org/)
  * 👀FULL-stack React framework 👀
    * lets you fetch data | asynchronous components / run | 
      * server or
      * during the build
  * versatile
  * lets you create
    * React apps / ANY size [static blog, complex dynamic application]
  * create a NEW Next.js project
  
    ```
    npx create-next-app@latest
    ```
  * Next.js app can be deployed 
    * |
      * ANY Node.js or serverless hosting
        * supports a [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) 
      * your OWN server
    * see [deploy a Next.js app](https://nextjs.org/docs/app/building-your-application/deploying)

### Remix {/*remix*/}

* TODO:
**[Remix](https://remix.run/) is a full-stack React framework with nested routing.** It lets you break your app into nested parts that can load data in parallel and refresh in response to the user actions. To create a new Remix project, run:

<TerminalBlock>
npx create-remix
</TerminalBlock>

If you're new to Remix, check out the Remix [blog tutorial](https://remix.run/docs/en/main/tutorials/blog) (short) and [app tutorial](https://remix.run/docs/en/main/tutorials/jokes) (long).

Remix is maintained by [Shopify](https://www.shopify.com/). When you create a Remix project, you need to [pick your deployment target](https://remix.run/docs/en/main/guides/deployment). You can deploy a Remix app to any Node.js or serverless hosting by using or writing an [adapter](https://remix.run/docs/en/main/other-api/adapter).

### Gatsby {/*gatsby*/}

* TODO:
**[Gatsby](https://www.gatsbyjs.com/) is a React framework for fast CMS-backed websites.** Its rich plugin ecosystem and its GraphQL data layer simplify integrating content, APIs, and services into one website. To create a new Gatsby project, run:

<TerminalBlock>
npx create-gatsby
</TerminalBlock>

If you're new to Gatsby, check out the [Gatsby tutorial.](https://www.gatsbyjs.com/docs/tutorial/)

Gatsby is maintained by [Netlify](https://www.netlify.com/). You can [deploy a fully static Gatsby site](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting) to any static hosting. If you opt into using server-only features, make sure your hosting provider supports them for Gatsby.

### Expo (for native apps) {/*expo*/}

* TODO:
**[Expo](https://expo.dev/) is a React framework that lets you create universal Android, iOS, and web apps with truly native UIs.** 
It provides an SDK for [React Native](https://reactnative.dev/) that makes the native parts easier to use. To create a new Expo project, run:

<TerminalBlock>
npx create-expo-app
</TerminalBlock>

If you're new to Expo, check out the [Expo tutorial](https://docs.expo.dev/tutorial/introduction/).

Expo is maintained by [Expo (the company)](https://expo.dev/about). Building apps with Expo is free, and you can submit them to the Google and Apple app stores without restrictions. Expo additionally provides opt-in paid cloud services.

## Bleeding-edge React frameworks {/*bleeding-edge-react-frameworks*/}

* React team's goal
  * 👀bleeding-edge React features / framework-agnostic, BUT integrated by React frameworks 👀
    * _Example:_ [React Server Components specification](https://github.com/dancer1325/reactjs-rfcs/blob/main/text/0188-server-components.md)
    * -- collaborate closely with -- Next.js team

### Next.js (App Router) {/*nextjs-app-router*/}

* [Next.js's App Router](https://nextjs.org/docs)
  * 👀== redesign of Next.js APIs / aim to fulfill the React team’s full-stack architecture vision 👀
  * maintained by [Vercel](https://vercel.com/)

#### Which features make up the React team’s full-stack architecture vision? {/*which-features-make-up-the-react-teams-full-stack-architecture-vision*/}

* React features
  * Server Components
  * Suspense

* Next.js's App Router  
  * bundler FULLY implements the official [React Server Components specification](https://github.com/dancer1325/reactjs-rfcs/blob/main/text/0188-server-components.md)
    * -> allows, | 1! React tree, 
      * build-time + server-only + interactive components 
    * _Example:_ 
      * write a server-only React component -- as an -- `async` function / reads from a database or from a file
      * pass data down from it -- to -- your interactive components

      ```js
      // This component runs *only* on the server (or during the build).
      async function Talks({ confId }) {
        // 1. You're on the server, so you can talk to your data layer. API endpoint not required.
        const talks = await db.Talks.findAll({ confId });
      
        // 2. Add any amount of rendering logic. It won't make your JavaScript bundle larger.
        const videos = talks.map(talk => talk.video);
      
        // 3. Pass the data down to the components that will run in the browser.
        return <SearchableVideoList videos={videos} />;
      }
      ```

  * integrates [data fetching -- with -- React Suspense](/src/content/blog/2022/03/29/react-v18.md#suspense-in-data-frameworks-suspense-in-data-frameworks) 
    * -> lets you, specify a loading state (_Example:_ skeleton placeholder) / DIFFERENT parts of your UI | DIRECTLY your React tree
      * _Example:_

    ```js
    <Suspense fallback={<TalksLoading />}>
      <Talks confId={conf.id} />
    </Suspense>
    ```

* ❌OTHER frameworks' App Router do NOT COMPLETELY implement ❌ 
  * React's Server Components
  * React's Suspense  
