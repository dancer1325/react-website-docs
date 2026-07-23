# Props := information / you pass | JSX tag
* [here](passing-props-to-a-component/src/Profile.js)
## allows React Component1 <- communicate with -> React Component2
* [here](passing-props-to-a-component/src/Profile.js)
## use cases: parent component -- pass information to -> child components
* [here](passing-props-to-a-component/src/PropJSX.js)
## ALLOWED values: ANY JS value (objects, arrays, functions)
* [here](passing-props-to-a-component/src/PropAnyJSValue.js)

# Familiar props
## BUILT-IN React components' ALLOWED props: predefined
* [here](passing-props-to-a-component/src/BuiltInProps.js)
## 👀your OWN components are freely customized by you👀
* [here](passing-props-to-a-component/src/PropJSX.js)

# Passing props | component
## if you pass props | React Component / NO capture them -> NO error
* [here](passing-props-to-a-component/src/Profile.js)'s `AvatarWithoutCaptureProps`
## ways to capture
### destructuring: `function ReactComponent({prop1, prop2, ...})`
* [here](passing-props-to-a-component/src/PropJSX.js)'s `AvatarCapturePropsDestructuring`
#### 👀you can specify a default value👀
* [here](passing-props-to-a-component/src/PropJSX.js)'s `AvatarCapturePropsDestructuring`'s `size` prop
### 1! argument: `function ReactComponent(props)`
* [here](passing-props-to-a-component/src/PropJSX.js)'s `AvatarCapturePropsUniqueArgument`
## ways to pass
### one by one: `<ReactComponent prop1=value1 />`
* [here](passing-props-to-a-component/src/PropJSX.js)
### spread syntax: `<ReactComponent {...variableWithProps} />`
* [here](passing-props-to-a-component/src/PropJSX.js)

# Passing JSX -- as -- children
## `children` := built-in prop / enable capturing nest content | JSX tag
* [here](passing-props-to-a-component/src/PropJSX.js)'s `Card`
## uses
### visual wrappers (panels, grids) 
* [here](passing-props-to-a-component/src/ChildrenExamples.js)
### repetitive blocks
* [here](passing-props-to-a-component/src/ChildrenExamples.js)

# How props change | over time
## if a component needs to change its props -> "ask" parent to pass NEW DIFFERENT props object
* [here](passing-props-to-a-component/src/PropChangeTimeParent.js)
## props are
### IMMUTABLE / EACH render
* [here](passing-props-to-a-component/src/PropsImmutable.js)
### ❌NOT ALWAYS static❌
* [here](passing-props-to-a-component/src/PropChangeTimeParent.js)
