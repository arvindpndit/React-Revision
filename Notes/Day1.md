# Day 1 of revising React

Hello, I'm Arvind Pandit Prajapati, a frontend developer with a passion for React. I am currently on a revision journey to explore the power, beauty, and ability of React.

## Connect with me

- LinkedIn: https://www.linkedin.com/in/arvindpndit/
- GitHub: https://github.com/arvindpndit

I'm excited to share my progress with you. Let's dive in and explore the world of React together!

## Creating a "Hello World" Heading

First things first, let's create a simple heading with "Hello World" text. Since you probably already know HTML, here's the code:

```html
<div id="root">
  <h1>Hello World</h1>
</div>
```

But let's do it using JavaScript for practice:

```javascript
const root = document.querySelector("#root");
const heading = document.createElement("h1");
heading.textContent = "Hello World";
root.appendChild(heading);
```

## Understanding CDNs

Now, let's talk about Content Delivery Networks (CDNs). What are they? Simply put, they are a system of distributed servers that deliver web content to users based on their geographic location.

In React, we use CDNs to include the necessary scripts for React in our project. In most cases, you'll see a `crossorigin` attribute in the CDN links, which tells the browser to allow loading of scripts even if they are hosted on another domain.

## Setting up React

Now that we have a basic understanding of CDNs, let's set up React in our project. We'll start by copying the CDN links from the React documentation and pasting them in the `head` section of our HTML file.

Once we have the necessary scripts, we can start writing React code. To create the same "Hello World" heading using React, we can use the `createElement` API provided by React:

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Hello world");

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
```

## Conclusion

And that's it for day 1 of my React journey! We learned how to create a simple heading using JavaScript, the basics of CDNs, and how to set up React in our project. In the next session, we'll learn about JSX and how it makes writing complex HTML structures easier in React. Stay tuned!
