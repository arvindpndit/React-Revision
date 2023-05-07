# Day 1 of Revising React

Welcome to my journey of revising React! On day 1, I started by writing a "Hello world" in HTML, but let's face it, if you're learning React, you're probably already familiar with HTML, CSS, and JavaScript.

So, I decided to level up my game by writing the same "Hello world" using JavaScript and `querySelector`. However, I knew that to unlock the true superpowers of React, I needed to add it to my project.

To do this, I used a Content Delivery Network (CDN) link to get the functionality of React in my project without having to download or save the code on my computer.

> Note: A CDN is a library of code that you can use in your project, saving you time and space. When you're using a CDN, it's important to add the `crossorigin` attribute to your links to make sure the scripts you're using are safe and secure.

With React added to my project, I was ready to create some seriously cool HTML structures using React's `createElement` API.

Here's an example of how I created an HTML structure with a div having an ID of `root` and an h1 element having an ID of `heading` and the text "Hello world":

```javascript
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello world"
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
```

In simple terms, I created an h1 element with an ID of `heading` and the text "Hello world" using React's `createElement` API. Then, I used `ReactDOM` to render this element in the div with the ID of `root`.

However, if you want to create a more complex HTML structure, using `createElement` may not be the most developer-friendly syntax. That's where JSX comes in! JSX is a more readable and intuitive way of writing complex HTML structures in React. It looks like HTML but is actually JavaScript.

So, are you excited to dive deeper into React with me? Let's do this!
