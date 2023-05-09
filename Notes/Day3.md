# Day 3 of revising React

In the previous day, I learned about the bundler and how it makes our app faster. Our app is dependent on the bundler which further depends upon other packages, and those can have dependencies on other packages, which is known as transitive dependencies.

I discussed browserlist yesterday, and when we write browserlist in the package.json file, what happens is our code is converted so that it can be run in older JavaScript engines.

But the question is: who does that? Does React do that or does Parcel do that? Interesting question, right? The answer is neither of those two does that. Babel does that!

Now, I'm confused. I didn't install Babel yesterday. Do I have to install it? No, I don't because it came along with Parcel. When I installed Parcel, Babel and a lot more packages came along with it.

## Babel

### What is Babel?

Babel is a popular tool used in web development to convert ECMAScript 2015+ code (also known as ES6+) into backwards-compatible versions of JavaScript that can run on older browsers or environments that don't support the latest syntax and features.

Babel works by analyzing and transforming your code, converting any modern JavaScript features that might not be supported by all browsers or environments into equivalent code that is widely compatible. This allows developers to write cutting-edge, modern JavaScript while still being able to support older systems.

In addition to converting modern syntax, Babel can also perform other tasks such as transforming JSX syntax used by React into regular JavaScript, and adding polyfills for features that are missing from certain browsers or environments.

To run my project, I have to run `npx parcel index.html`, which takes time to write. So I'm going to build a script inside `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Now, to run, I'll use `npm run start` or `npm start`, which is faster to write.

At the end of the project, it is necessary that I'll remove all the `console.log()`. To do so, there is a package `babel-plugin-transform-remove-console`, which removes all the `console.log()` statements.

After installing this package, I created a folder `.babelrc`, and in this folder, I'll write the given config:

```json
{
  "plugins": [
    [
      "transform-remove-console",
      {
        "exclude": ["error", "warn"]
      }
    ]
  ]
}
```

Now all the `console.log()` statements are disappeared just like magic.

## Introduction of keys

When a React element has multiple children, each child should have a unique key that is used by React for efficient tree conversion.

Here's an example code snippet that creates two headings using `React.createElement()` and attaches them to a root element:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "1",
  },
  "Heading one"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    key: "2",
  },
  "Heading two"
);

const container = React.createElement("div", {}, [heading1, heading2]);

root.render(container);
```

The `React.createElement()` function returns an object that represents the HTML code and puts it upon the DOM. I've come across a common problem where I need to create a large HTML structure using React's `createElement()` method. While this method works fine for small structures, it quickly becomes unmanageable for larger ones.

So now, instead of writing tedious code with `createElement()`, I can write HTML-like code in my JavaScript files and let JSX do the heavy lifting. It's a game-changer for my React development!
