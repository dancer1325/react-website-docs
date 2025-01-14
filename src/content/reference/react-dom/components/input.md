---
title: "<input>"
---

* `<input />`
  * == [built-in browser `<input>` component](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) / 
    * lets you render 👀DIFFERENT kinds of form inputs 👀

## Reference {/*reference*/}

### `<input>` {/*input*/}

#### Props {/*props*/}

* supports
  * ALL [common element props](common.md#props-common-props)
  * [`formAction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction)
    * == string or function
    * overrides the parent 
      * `type="submit"`'s `<form action>`
      * `type="image"` 's   
    * vs [`<form action>`](form.md#props-props)
      * if you pass a URL to `action` -> form's behavior == standard HTML form
      * if you pass a function to `formAction` -> function -- will handle the -- form submission
  * props / [control an input](#controlling-an-input-with-a-state-variable-controlling-an-input-with-a-state-variable)
    * [`checked`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#checked)
      * boolean
      * ALLOWED, | input type's `checkbox` a `radio`
    * [`value`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#value)
      * == string
      * | 
        * text input, controls its text
        * radio button, specifies its form data
    * if PREVIOUS BOTH are passed -> pass an `onChange` handler / updates the passed value
  * props / ONLY relevant for uncontrolled inputs
    * [`defaultChecked`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#defaultChecked)
      * == boolean /
        * [initial value](#providing-an-initial-value-for-an-input) | 
          * `type="checkbox"`
          * `type="radio"`
    * [`defaultValue`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#defaultValue)
      * == string /
        * [initial value](#providing-an-initial-value-for-an-input) | `type=input`
  * props / relevant | uncontrolled & controlled inputs
    * [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#accept)
      * == string /
        * filetypes -- accepted by a -- `type="file"`
    * [`alt`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#alt): TODO: A string. Specifies the alternative image text for a `type="image"` input.
    * [`capture`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#capture): A string. Specifies the media (microphone, video, or camera) captured by a `type="file"` input.
    * [`autoComplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete): A string. Specifies one of the possible [autocomplete behaviors.](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values)
    * [`autoFocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autofocus): A boolean. If `true`, React will focus the element on mount.
    * [`dirname`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#dirname): A string. Specifies the form field name for the element's directionality.
    * [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#disabled): A boolean. If `true`, the input will not be interactive and will appear dimmed.
    * `children`: `<input>` does not accept children.
    * [`form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#form): A string. Specifies the `id` of the `<form>` this input belongs to. If omitted, it's the closest parent form.
    * [`formAction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formaction): A string. Overrides the parent `<form action>` for `type="submit"` and `type="image"`.
    * [`formEnctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formenctype): A string. Overrides the parent `<form enctype>` for `type="submit"` and `type="image"`.
    * [`formMethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formmethod): A string. Overrides the parent `<form method>` for `type="submit"` and `type="image"`.
    * [`formNoValidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formnovalidate): A string. Overrides the parent `<form noValidate>` for `type="submit"` and `type="image"`.
    * [`formTarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#formtarget): A string. Overrides the parent `<form target>` for `type="submit"` and `type="image"`.
    * [`height`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#height): A string. Specifies the image height for `type="image"`.
    * [`list`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#list): A string. Specifies the `id` of the `<datalist>` with the autocomplete options.
    * [`max`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max): A number. Specifies the maximum value of numerical and datetime inputs.
    * [`maxLength`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength): A number. Specifies the maximum length of text and other inputs.
    * [`min`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min): A number. Specifies the minimum value of numerical and datetime inputs.
    * [`minLength`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength): A number. Specifies the minimum length of text and other inputs.
    * [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#multiple): A boolean. Specifies whether multiple values are allowed for `<type="file"` and `type="email"`.
    * [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name): A string. Specifies the name for this input that's [submitted with the form.](#reading-the-input-values-when-submitting-a-form)
    * `onChange`: 
      * == [`Event` handler function](common.md#event-handler-function-event-handler) / 
        * ⚠️REQUIRED | [controlled inputs](#controlling-an-input-with-a-state-variable-controlling-an-input-with-a-state-variable)⚠️
        * if the input's value -- is changed by the -- user (_Example:_ it fires | EVERY keystroke) -> fires IMMEDIATELY  
        * 's behaviour == browser [`input` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
    * `onChangeCapture`: A version of `onChange` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
    * [`onInput`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event): An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Fires immediately when the value is changed by the user. For historical reasons, in React it is idiomatic to use `onChange` instead which works similarly.
    * `onInputCapture`: A version of `onInput` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
    * [`onInvalid`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event): An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Fires if an input fails validation on form submit. Unlike the built-in `invalid` event, the React `onInvalid` event bubbles.
    * `onInvalidCapture`: A version of `onInvalid` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
    * [`onSelect`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event): An [`Event` handler](/reference/react-dom/components/common#event-handler) function. Fires after the selection inside the `<input>` changes. React extends the `onSelect` event to also fire for empty selection and on edits (which may affect the selection).
    * `onSelectCapture`: A version of `onSelect` that fires in the [capture phase.](/learn/responding-to-events#capture-phase-events)
    * [`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern): A string. Specifies the pattern that the `value` must match.
    * [`placeholder`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder): A string. Displayed in a dimmed color when the input value is empty.
    * [`readOnly`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly): A boolean. If `true`, the input is not editable by the user.
    * [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#required): A boolean. If `true`, the value must be provided for the form to submit.
    * [`size`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#size): A number. Similar to setting width, but the unit depends on the control.
    * [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#src): A string. Specifies the image source for a `type="image"` input.
    * [`step`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step): A positive number or an `'any'` string. Specifies the distance between valid values.
    * [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type): A string. One of the [input types.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
    * [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#width):  A string. Specifies the image width for a `type="image"` input.

#### Caveats {/*caveats*/}

- Checkboxes need `checked` (or `defaultChecked`), not `value` (or `defaultValue`).
- If a text input receives a string `value` prop, it will be [treated as controlled.](#controlling-an-input-with-a-state-variable)
- If a checkbox or a radio button receives a boolean `checked` prop, it will be [treated as controlled.](#controlling-an-input-with-a-state-variable)
- An input can't be both controlled and uncontrolled at the same time.
- An input cannot switch between being controlled or uncontrolled over its lifetime.
- Every controlled input needs an `onChange` event handler that synchronously updates its backing value.

---

## Usage {/*usage*/}

### Displaying inputs of different types {/*displaying-inputs-of-different-types*/}

To display an input, render an `<input>` component. By default, it will be a text input. You can pass `type="checkbox"` for a checkbox, `type="radio"` for a radio button, [or one of the other input types.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

<Sandpack>

```js
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
```

</Sandpack>

---

### Providing a label for an input {/*providing-a-label-for-an-input*/}

Typically, you will place every `<input>` inside a [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) tag. This tells the browser that this label is associated with that input. When the user clicks the label, the browser will automatically focus the input. It's also essential for accessibility: a screen reader will announce the label caption when the user focuses the associated input.

If you can't nest `<input>` into a `<label>`, associate them by passing the same ID to `<input id>` and [`<label htmlFor>`.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor) To avoid conflicts between multiple instances of one component, generate such an ID with [`useId`.](/reference/react/useId)

<Sandpack>

```js
import { useId } from 'react';

export default function Form() {
  const ageInputId = useId();
  return (
    <>
      <label>
        Your first name:
        <input name="firstName" />
      </label>
      <hr />
      <label htmlFor={ageInputId}>Your age:</label>
      <input id={ageInputId} name="age" type="number" />
    </>
  );
}
```

```css
input { margin: 5px; }
```

</Sandpack>

---

### Providing an initial value for an input {/*providing-an-initial-value-for-an-input*/}

You can optionally specify the initial value for any input. Pass it as the `defaultValue` string for text inputs. Checkboxes and radio buttons should specify the initial value with the `defaultChecked` boolean instead.

<Sandpack>

```js
export default function MyForm() {
  return (
    <>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true} 
          />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
    </>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
```

</Sandpack>

---

### Reading the input values when submitting a form {/*reading-the-input-values-when-submitting-a-form*/}

Add a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) around your inputs with a [`<button type="submit">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) inside. It will call your `<form onSubmit>` event handler. By default, the browser will send the form data to the current URL and refresh the page. You can override that behavior by calling `e.preventDefault()`. Read the form data with [`new FormData(e.target)`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
<Sandpack>

```js
export default function MyForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}
```

```css
label { display: block; }
input { margin: 5px; }
```

</Sandpack>

<Note>

Give a `name` to every `<input>`, for example `<input name="firstName" defaultValue="Taylor" />`. The `name` you specified will be used as a key in the form data, for example `{ firstName: "Taylor" }`.

</Note>

<Pitfall>

By default, *any* `<button>` inside a `<form>` will submit it. This can be surprising! If you have your own custom `Button` React component, consider returning [`<button type="button">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button) instead of `<button>`. Then, to be explicit, use `<button type="submit">` for buttons that *are* supposed to submit the form.

</Pitfall>

---

### Controlling an input -- via a -- state variable {/*controlling-an-input-with-a-state-variable*/}

* `<input />`
  * 👀by default, [uncontrolled](/src/content/learn/sharing-state-between-components.md#controlled-and-uncontrolled-components-controlled-and-uncontrolled-components) 👀
    * Reason: 🧠 NOT control the value / CURRENTLY it's 🧠 
  * [controlled input](/src/content/learn/sharing-state-between-components.md#controlled-and-uncontrolled-components-controlled-and-uncontrolled-components) 
    * if you want a controlled one -> pass -- via [lifting state up](/src/content/learn/sharing-state-between-components.md), props --
      * `value` or 
        * -> ⚠️requires configuring `onChange` ⚠️ 
      * `checked`, | `input`'s `type=checkbox` or `type=radio`
    * uses
      * you needed state anyway
        * _Example:_ -- to re-render your -- UI | EVERY edit
      * offer MULTIPLE ways -- to adjust the -- input state
        * _Example:_ click a button

---

### Optimizing re-rendering on every keystroke {/*optimizing-re-rendering-on-every-keystroke*/}

When you use a controlled input, you set the state on every keystroke. 
If the component containing your state re-renders a large tree, this can get slow.
There's a few ways you can optimize re-rendering performance.

For example, suppose you start with a form that re-renders all page content on every keystroke:

```js {5-8}
function App() {
  const [firstName, setFirstName] = useState('');
  return (
    <>
      <form>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </form>
      <PageContent />
    </>
  );
}
```

Since `<PageContent />` doesn't rely on the input state, you can move the input state into its own component:

```js {4,10-17}
function App() {
  return (
    <>
      <SignupForm />
      <PageContent />
    </>
  );
}

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  return (
    <form>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} />
    </form>
  );
}
```

This significantly improves performance because now only `SignupForm` re-renders on every keystroke.

If there is no way to avoid re-rendering (for example, if `PageContent` depends on the search input's value), 
[`useDeferredValue`](/reference/react/useDeferredValue#deferring-re-rendering-for-a-part-of-the-ui) lets you keep the controlled input responsive even in the middle of a large re-render.

---

## Troubleshooting {/*troubleshooting*/}

### My text input doesn't update when I type into it {/*my-text-input-doesnt-update-when-i-type-into-it*/}

If you render an input with `value` but no `onChange`, you will see an error in the console:

```js
// 🔴 Bug: controlled text input with no onChange handler
<input value={something} />
```

<ConsoleBlock level="error">

You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

</ConsoleBlock>

As the error message suggests, if you only wanted to [specify the *initial* value,](#providing-an-initial-value-for-an-input) pass `defaultValue` instead:

```js
// ✅ Good: uncontrolled input with an initial value
<input defaultValue={something} />
```

If you want [to control this input with a state variable,](#controlling-an-input-with-a-state-variable) specify an `onChange` handler:

```js
// ✅ Good: controlled input with onChange
<input value={something} onChange={e => setSomething(e.target.value)} />
```

If the value is intentionally read-only, add a `readOnly` prop to suppress the error:

```js
// ✅ Good: readonly controlled input without on change
<input value={something} readOnly={true} />
```

---

### My checkbox doesn't update when I click on it {/*my-checkbox-doesnt-update-when-i-click-on-it*/}

If you render a checkbox with `checked` but no `onChange`, you will see an error in the console:

```js
// 🔴 Bug: controlled checkbox with no onChange handler
<input type="checkbox" checked={something} />
```

<ConsoleBlock level="error">

You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.

</ConsoleBlock>

As the error message suggests, if you only wanted to [specify the *initial* value,](#providing-an-initial-value-for-an-input) pass `defaultChecked` instead:

```js
// ✅ Good: uncontrolled checkbox with an initial value
<input type="checkbox" defaultChecked={something} />
```

If you want [to control this checkbox with a state variable,](#controlling-an-input-with-a-state-variable) specify an `onChange` handler:

```js
// ✅ Good: controlled checkbox with onChange
<input type="checkbox" checked={something} onChange={e => setSomething(e.target.checked)} />
```

<Pitfall>

You need to read `e.target.checked` rather than `e.target.value` for checkboxes.

</Pitfall>

If the checkbox is intentionally read-only, add a `readOnly` prop to suppress the error:

```js
// ✅ Good: readonly controlled input without on change
<input type="checkbox" checked={something} readOnly={true} />
```

---

### My input caret jumps to the beginning on every keystroke {/*my-input-caret-jumps-to-the-beginning-on-every-keystroke*/}

If you [control an input,](#controlling-an-input-with-a-state-variable) you must update its state variable to the input's value from the DOM during `onChange`.

You can't update it to something other than `e.target.value` (or `e.target.checked` for checkboxes):

```js
function handleChange(e) {
  // 🔴 Bug: updating an input to something other than e.target.value
  setFirstName(e.target.value.toUpperCase());
}
```

You also can't update it asynchronously:

```js
function handleChange(e) {
  // 🔴 Bug: updating an input asynchronously
  setTimeout(() => {
    setFirstName(e.target.value);
  }, 100);
}
```

To fix your code, update it synchronously to `e.target.value`:

```js
function handleChange(e) {
  // ✅ Updating a controlled input to e.target.value synchronously
  setFirstName(e.target.value);
}
```

If this doesn't fix the problem, it's possible that the input gets removed and re-added from the DOM on every keystroke. This can happen if you're accidentally [resetting state](/learn/preserving-and-resetting-state) on every re-render, for example if the input or one of its parents always receives a different `key` attribute, or if you nest component function definitions (which is not supported and causes the "inner" component to always be considered a different tree).

---

### I'm getting an error: "A component is changing an uncontrolled input to be controlled" {/*im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled*/}


If you provide a `value` to the component, it must remain a string throughout its lifetime.

You cannot pass `value={undefined}` first and later pass `value="some string"` because React won't know whether you want the component to be uncontrolled or controlled. A controlled component should always receive a string `value`, not `null` or `undefined`.

If your `value` is coming from an API or a state variable, it might be initialized to `null` or `undefined`. In that case, either set it to an empty string (`''`) initially, or pass `value={someValue ?? ''}` to ensure `value` is a string.

Similarly, if you pass `checked` to a checkbox, ensure it's always a boolean.
