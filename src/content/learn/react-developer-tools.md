---
title: React Developer Tools
---

* goal
  * how to install React Developer Tools 

* React Developer Tools
  * allows
    * inspecting React [components](your-first-component.md),
    * edit 
      * [props](passing-props-to-a-component.md)
      * [state](state-a-components-memory.md)
    * identifying performance problems

## Browser extension {/*browser-extension*/}

* React Developer Tools browser extension
  * enable the panels
    * _Components_
    * _Profiler_
  * allows
    * debugging websites / built with React
  * install for
    * [**Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
    * [**Firefox**](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
    * [**Edge**](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

![React Developer Tools extension](/images/docs/react-devtools-extension.png)

### Safari & OTHER browsers {/*safari-and-other-browsers*/}

* install the [`react-devtools`](https://www.npmjs.com/package/react-devtools) npm package

    ```bash
    # Yarn
    yarn global add react-devtools
    
    # Npm
    npm install -g react-devtools
    ```

* open the developer tools | terminal
    
  ```bash
    react-devtools
    ```

* TODO:
Then connect your website by adding the following `<script>` tag to the beginning of your website's `<head>`:
```html {3}
<html>
  <head>
    <script src="http://localhost:8097"></script>
```

Reload your website in the browser now to view it in developer tools.

![React Developer Tools standalone](/images/docs/react-devtools-standalone.png)

## Mobile (React Native) {/*mobile-react-native*/}
React Developer Tools can be used to inspect apps built with [React Native](https://reactnative.dev/) as well.

The easiest way to use React Developer Tools is to install it globally:
```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Next open the developer tools from the terminal.
```bash
react-devtools
```

It should connect to any local React Native app that's running.

> Try reloading the app if developer tools doesn't connect after a few seconds.

[Learn more about debugging React Native.](https://reactnative.dev/docs/debugging)
