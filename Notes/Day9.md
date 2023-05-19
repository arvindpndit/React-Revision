# Day 9 of revising React

Welcome to Day 9 of revising React! Today, we'll be diving into class-based components and exploring various concepts related to them. Get ready to level up your React skills!

## Class-based Component Basics

In React, class-based components were an older way of creating components before the introduction of functional components. Although functional components are now the preferred approach, understanding class-based components is still valuable for maintaining and working with existing codebases.

Let's start by creating a simple class-based component called `ProfileClass`:

```jsx
class ProfileClass extends React.Component {
  render() {
    return <div>Hello, I'm Arvind🫡</div>;
  }
}
```

In this code, we define a class called `ProfileClass` that extends the `React.Component` class. The `render` method is a required method in a class-based component and returns the JSX that represents the component's output.

## Props in Class-based Components

Just like functional components, class-based components can also accept props. To access props in a class-based component, we use `this.props`. Here's an example:

```jsx
class ProfileClass extends React.Component {
  render() {
    return <div>Hello, I'm {this.props.name}🫡</div>;
  }
}
```

In this code, we're accessing the `name` prop and rendering it within the component's output.

## State in Class-based Components

In class-based components, state is managed using the constructor function. Unlike functional components that utilize the `useState` hook, class-based components use the constructor to initialize the state.

```jsx
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arvind",
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <button
          className="px-2 py-1 bg-green-400"
          onClick={() => {
            this.setState({
              name: "Arvind Pandit Prajapati",
            });
          }}
        >
          Full Name
        </button>
      </div>
    );
  }
}
```

In this code, we define the initial state of the component in the constructor function using `this.state`. We can access and update the state using `this.state` and `this.setState` respectively.

## React Component Lifecycle

The React component lifecycle refers to a series of methods that are executed at different stages of a component's existence in a React application. The lifecycle is divided into three phases: Mounting, Updating, and Unmounting. Each phase has specific methods associated with it.

1. **Mounting Phase**:

   - `constructor()`: This is the first method called when the component is created.
   - `render()`: This method is responsible for rendering the component's JSX.
   - `componentDidMount()`: This method is invoked immediately after the component is mounted in the DOM.

2. **Updating Phase**:

   - `componentDidUpdate()`: This method is called after the component's update is reflected in the DOM.

3. **Unmounting Phase**:
   - `componentWillUnmount()`: This method is invoked just before the component is unmounted and removed from the DOM.

These methods provide hooks into different stages of a component's lifecycle, allowing us to perform certain actions or handle side effects at specific points.

## Example: Order of Execution of Lifecycle Methods

Let's take an example to understand the order of execution of lifecycle methods:

```jsx
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return <ProfileClass name={"Arvind"} />;
  }
}

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child render");
    return null;
  }
}
```

In this example, the order of execution is as follows:

For a single child component:

```
Parent Constructor
Parent Render
Child Constructor
Child Render
Child componentDidMount
Parent componentDidMount
```

For multiple child components:

```
Parent Constructor
Parent Render
Child 1 Constructor
Child 1 Render
Child 2 Constructor
Child 2 Render
Child 1 componentDidMount
Child 2 componentDidMount
Parent componentDidMount
```

In both cases, the parent component's constructor is called first, followed by its render method. Then, each child component's constructor and render method are called in the order they appear. After that, the child components' `componentDidMount` methods are called in the order they appear. Finally, the parent component's `componentDidMount` method is called.

To get a better understanding of React lifecycles, you can refer to this [lifecycle methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

## Using `componentWillUnmount`

The `componentWillUnmount` method is used for cleanup operations when a component is about to be unmounted, such as clearing a timer or cancelling an ongoing network request. Here's an example:

```jsx
class ProfileClass extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello, I'm Arvind");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return null;
  }
}
```

In this code, we set up a timer in `componentDidMount` and clear it in `componentWillUnmount`, ensuring that the timer is cleaned up when the component is unmounted.

In functional components, achieving the same result is easier using the `useEffect` hook:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Hello, I'm Arvind");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

With the cleanup function returned by `useEffect`, we can handle cleanup tasks in a more straightforward manner.

Congratulations on completing Day 9 of revising React! You've learned about class-based components, props, state, React component lifecycle, and cleanup operations. Keep up the great work, and stay tuned for more React revision sessions!
