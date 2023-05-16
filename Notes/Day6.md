# Day 6 of revising React

## Creating a File Structure

Yesterday I created the layout of my application but I wrote everything inside the `App.js` file and my `App.js` file was looking so messy. So today, I decided to make different files for different components which will make our code more modular and easier to navigate.

To achieve this, I created a `src` folder and added the `App.js` inside it. Then, I created a `component` folder and put all the components inside it. For my `cards` array, I created a `constants.js` file and put the cards array inside it.

## Named and Default Export

To make our code more modular, we need to understand named and default exports.

Let's take an example to understand this:

```javascript
const NavbarComponent = () => {
  return <div>NavbarComponent</div>;
};

export default NavbarComponent;
```

This is a default export. To import this, we write:

```javascript
import NavbarComponent from "./components/NavbarComponent";
```

For named export, we do:

```javascript
export const NavbarComponent = () => {
  return <div>NavbarComponent</div>;
};
```

To import this, we write:

```javascript
import { NavbarComponent } from "./components/NavbarComponent";
```

## Learning Hooks: useState Hook

Hooks are basically normal JS functions. Yes, you read it right - hooks are just normal JS functions. Now, let's learn our first React hook - `useState` hook.

`useState` is used to create a state variable. Here's the syntax:

```javascript
const [name, setName] = useState("Arvind");
```

Here, `name` is the state variable and `setName` is a function that `useState` returns. To change the value of the `name` variable, you cannot simply do:

```javascript
name = "DevArvind";
```

To change the state variable `name` to `"DevArvind"`, you need to use the `setName` function, like this:

```javascript
setName("DevArvind");
```

Sure, here's the updated README.md file written in first person:

## React SearchBar Component

I've created a simple React component that allows users to search for restaurants based on their names. I've used the `useState` hook from the React library to manage the state of the search input field.

### Why did I use the `useState` hook?

I used the `useState` hook to create a state variable `searchInput` and a function `setSearchInput` to manage the value of the search input field. Whenever the user types something in the search input field, the `onChange` event handler updates the value of `searchInput` using the `setSearchInput` function. This triggers a re-render of the component with the new value of `searchInput`. The `filteredRestaurantList` function uses the current value of `searchInput` to filter the list of restaurants based on their names.

### How to use the component?

To use this component, simply import it into your React application and pass in the following props:

- `cards`: an array of restaurant data
- `setNewRestaurant`: a function that updates the list of restaurants to be rendered based on the search input

The component renders a search input field and a search button. Whenever the user types something in the search input field and clicks the search button, the component filters the list of restaurants based on the search input and updates the list of restaurants to be rendered using the `setNewRestaurant` function.

```javascript
import { useState } from "react";

const SearchBar = ({ cards, setNewRestaurant }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredRestaurantList = () => {
    const filteredRestaurantListData = cards.filter((card) =>
      card.data.name.includes(searchInput)
    );
    return filteredRestaurantListData;
  };

  return (
    <div className="text-center mt-3 outline-none ">
      <input
        type="text"
        placeholder="Search Food"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="bg-green-100 px-3 py-2 "
      />

      <button
        className="bg-green-200 px-3 py-2"
        onClick={() => {
          //filter the restaurant list
          const filteredRestaurantListData = filteredRestaurantList();
          //set the new restaurant data which gets rendered
          setNewRestaurant(filteredRestaurantListData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
```
