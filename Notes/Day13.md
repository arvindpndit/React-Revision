# Day 13 of Revising React

In a big web application, handling data is crucial. One popular library for handling data in React is Redux. Today, we will study Redux and how it can help us manage application state effectively.

Previously, we used the Context API to avoid prop drilling. Context provides a central place where any component can access or modify the shared data. However, instead of creating multiple contexts, we can create a centralized Redux store. Here are some alternatives to Redux:

- MobX
- Zustand
- Recoil
- Apollo Client (for GraphQL)

## Installation

To use Redux in your React application, you need to install the following packages:

```
npm install @reduxjs/toolkit
npm install react-redux
```

## Create a Redux Store

In your application's entry point (e.g., index.js), create a Redux store using the `configureStore` function:

```javascript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // Add your reducers here
});
```

## Provide the Redux Store to React

Wrap your root component with the Redux `Provider` component to provide access to the Redux store throughout your application:

```javascript
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## Create a Redux State Slice

To manage a specific part of the application state, you can create a Redux state slice. Here's an example of creating a `cart` state slice:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
```

## Add Slice Reducers to the Store

In your store configuration, add the slice reducer to the `reducer` object:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
```

## Use Redux State and Actions in React Components

To use Redux state and dispatch actions in your React components, you can utilize the `useSelector` and `useDispatch` hooks provided by React Redux.

Here's an example of using Redux in a component:

```javascript
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../helper/cartSlice";

const RestaurantMenuItem = ({ card }) => {
  const { name, imageId, price } = card?.card?.info;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItems(name));
  };

  // Rest of the component code
};

// Usage in another component
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../helper/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(removeItems());
  };

  // Rest of the component code
};
```

## Summary

Here's a summary of the concepts covered in this revising session:

- Create a Redux store with `configureStore`
- Provide the Redux store to

the React application using the `Provider` component

- Create a Redux state slice using `createSlice`
- Add slice reducers to the store configuration
- Use the `useSelector` and `useDispatch` hooks to access Redux state and dispatch actions in React components

## Conclusion

Congratulations on completing Day 13 of revising React! Throughout this journey, we have explored various aspects of React and brushed up on our skills. React is a powerful library, and JavaScript is a beautiful language.

I hope you enjoyed this journey and found it helpful in reinforcing your React knowledge. Keep practicing and building exciting applications with React!

This is Arvind Pandit, signing off. Happy React journey!
