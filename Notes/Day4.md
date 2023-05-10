# Day 4 of revising React

## What is JSX?

JSX (JavaScript XML) is an extension to the JavaScript language, which allows you to write HTML-like syntax directly in your JavaScript code. It is not a requirement for writing React applications, but it is a popular choice among developers because it offers a lot of benefits.

## Why JSX was introduced?

JSX was introduced to make it easier to create and manipulate the DOM elements in a React application. Instead of using plain JavaScript to create and manipulate HTML elements, developers can use JSX to write code that is easier to read and maintain.

## Converting from React.createElement to JSX

Let's take a look at the following code that we are already familiar with:

```javascript
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone"
);
```

Here, we are creating a heading element using `React.createElement()`. We are passing three arguments to this function: the type of element we want to create (`h1`), its attributes (`id: "title"`), and its content (`"Namaste Everyone"`).

Now, let's convert this code into JSX:

```javascript
const heading = <h1>Namaste Everyone</h1>;
```

As you can see, writing JSX is very simple and allows us to write HTML-like syntax directly in our JavaScript code.

Remark: JSX is not HTML inside JavaScript, it is HTML-like syntax.

## The Magic Behind JSX

Under the hood, JSX is converted into calls to `React.createElement()` by a tool called Babel. When you write JSX code, Babel compiles it into plain JavaScript that can be understood by the browser.

Here's what happens behind the scenes when we write JSX:

JSX => Babel => React.createElement() => Object => HTML(DOM)

In other words, Babel compiles JSX into calls to `React.createElement()`, which returns an object that represents the DOM element. This object is then converted into HTML and rendered in the browser.

## Advantages of JSX

JSX offers several advantages over plain JavaScript for creating and manipulating DOM elements:

1. **Readability**: JSX code is much easier to read than plain JavaScript, especially when dealing with complex DOM structures.

2. **Syntactical Sugar**: JSX is a syntactical sugar over `React.createElement()`, which makes it easier to write and understand code.

3. **Less Code**: JSX allows you to write less code than plain JavaScript, which can save time and reduce the chances of making errors.

4. **Developer Experience**: JSX provides a better developer experience by allowing developers to write code that is more familiar to them.

5. **Maintainability**: JSX code is easier to maintain than plain JavaScript, as it is more declarative and easier to read and understand.

In summary, JSX is a powerful tool that allows developers to write HTML-like syntax directly in their JavaScript code, making it easier to create and manipulate DOM elements in React applications.

<br>

## React Components

In React, everything is a component - from simple UI elements like buttons and forms to entire pages and applications. Components are reusable, modular pieces of code that can be easily combined to build complex UIs.

There are two types of React components - functional and class-based components. Functional components are simply JavaScript functions that return JSX code. They are the newer and more preferred way of writing React components.

An example of a functional component is:

```jsx
const HeadingComponent = () => {
  return <h1>Namaste Everyone</h1>;
};
```

This component simply returns an `h1` element with the text "Namaste Everyone".

Functional components can be easily composed to build more complex UIs. For example, we can define another functional component called `Heading2`:

```jsx
const Heading2 = () => {
  return <h2>This is second functional component</h2>;
};
```

We can then use `Heading2` inside `HeadingComponent`:

```jsx
const HeadingComponent = () => {
  return (
    <>
      <h1>Namaste Everyone</h1>
      <Heading2 />
    </>
  );
};
```

This code renders both the `h1` element and the `Heading2` component.

We can also use a functional component inside another functional component by calling it as a function. For example:

```jsx
const Heading = () => {
  return <h3>Hi from Heading!</h3>;
};

const HeadingComponent = () => {
  return (
    <>
      <h1>Namaste Everyone</h1>
      {Heading()}
    </>
  );
};
```

This code also renders both the `h1` element and the `Heading` component.

Finally, component composition is the concept of combining multiple smaller components to create larger and more complex components. It is a fundamental concept in React development and allows for greater reusability and maintainability of code.
