# Day 12 of revising React

## Introduction

Welcome to Day 12 of revising React! In today's session, we will focus on handling data in React applications. Data management is a crucial aspect of building any application, and understanding the concepts of states, props, and data flow is essential.

## Frontend Layers

The frontend of any React application consists of two layers:

1. **Data Layer**: This layer includes states, props, and other data-related components. States are local variables within a component, while props are passed from one component to another. Props can also be seen as local variables of the parent component.

2. **UI Layer**: This layer comprises the JSX code we write, which gets converted into JavaScript and then rendered as HTML DOM elements.

## Props Drilling

Props drilling refers to the process of passing props from a parent component to its nested children components. Let's consider an example to understand this concept:

```
AppLayout (parent)
	- Body (child)
		- About (child)
			- UserSection (child)
				 - Info (child)
```

Suppose we have a `userInfo` state variable in the `AppLayout` component, and we want to pass this `userInfo` to the children components. In this scenario, we pass the props from `AppLayout` to `Body`, then to `About`, then to `UserSection`, and finally to `Info`. This passing of props through multiple levels of components is known as props drilling.

## React Dev Tools

React Dev Tools is a valuable extension for debugging the data layer of a React application. It provides features such as Components and Profiler.

- **Components**: This feature allows you to inspect and analyze the component hierarchy of your application. You can view the props, state, and other details of each component, making it easier to debug and understand the application structure.

- **Profiler**: The Profiler feature helps measure the performance of your React components. It provides insights into rendering time, component updates, and overall application performance.

## Lifting the State Up

"Lifting the state up" is a concept in React where you move the state from a child component to its parent component. This is done to share and manage the state at a higher level, making it accessible to other child components that need it. By lifting the state up, you ensure that multiple components can access and update the shared state, maintaining consistency throughout the application.

## Context API

The Context API is a powerful tool provided by React for managing state across the application. It allows you to create a context that can be accessed by multiple components without passing props manually at each level.

To create a context, you can use the `createContext` function from React.

```javascript
import { createContext } from "react";

const UserContext = createContext({
  info: {
    name: "Arvind Pandit",
    email: "arvindpandit9808@gmail.com",
    linkedIn: "https://www.linkedin.com/in/arvindpndit/",
  },
});

export default UserContext;
```

The above code snippet demonstrates the creation of a `UserContext` using `createContext`. It sets a default value for the context, which can be overridden when providing the context at a higher level.

To access the context, you can use the `useContext` hook in functional components:

```javascript
import { useContext } from "react";
import UserContext from "../helper/UserContext";

const Footer = () => {
  const { info } = useContext(UserContext);
  // Access the info object from the UserContext
  // ...
};

export default Footer;
```

In class-based components, you can use the `UserContext.Consumer` component to access the context:

```javascript
import React from "react";
import UserContext from "../helper/userContext";

class About extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ info }) => (
          <div>
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h3>{info.linkedIn}</h3>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default About;
```

## Overriding the Context's Data

When using the Context API, you can override the default value of the context by providing a new value using the `Provider` component.

```javascript
const AppLayout = () => {
  const [user, setUser] = useState({
    info: {
      name: "ArvindPandit",
      email: "arvindpandit9808@gmail.com",
      linkedIn: "https://www.linkedin.com/in/arvindpndit/",
    },
  });

  return (
    <div>
      <UserContext.Provider
        value={{
          info: user.info,
          setUser: setUser,
        }}
      >
        {/* Render your application components */}
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};
```

In the above code, we create a `UserContext.Provider` component and provide a new value for the `info` property of the context. This allows us to override the default value set in the context definition.

## Conclusion

In this session, we covered the concepts of data handling in React. We explored the differences between states and props, discussed props drilling, and learned about the React Dev Tools and its components and profiler features. Additionally, we explored the concept of lifting state up, using the Context API for managing state across the application, and how to access context in functional and class-based components. Understanding these concepts is essential for building robust and scalable React applications. Happy coding!
