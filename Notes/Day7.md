# Day 7 of revising React

Welcome back to the second half of the React revision! Today, we'll start by revising the `useState` Hook before moving further. The `useState` hook is a function used to create a local state variable. Whenever there is something that changes on the UI, we create a local variable to handle this, which keeps our UI in sync with the local state variable.

An important question often asked is why React is fast? React is fast because it uses something known as the reconciliation process, which uses a diff algorithm to compare the difference between the trees, i.e., the actual DOM and the virtual DOM, and React does all this very fast.

Let's also take a glimpse of monolith and microservice architecture:

## Monolith architecture

Monolithic architecture is a type of architecture where all components of an application are combined into a single unit. In simpler terms, it is an architecture where the entire application is developed as a single module and deployed as a single executable file.

### Advantages of Monolith architecture

- It is simple and easy to develop.
- Debugging is easier.
- Deployment is easier since the entire application is deployed as a single unit.
- It is less complex compared to microservice architecture.

### Disadvantages of Monolith architecture

- Scalability can be a problem since the entire application needs to be scaled up even if only a single component needs to be scaled up.
- The application can become too large and complex to manage, leading to maintenance issues.
- Upgrading or adding a new feature can be challenging.

## Microservice architecture

Microservice architecture is a type of architecture where an application is composed of loosely coupled, independent services that communicate with each other through APIs. Each service is developed and deployed independently, and each service has its own database.

### Advantages of Microservice architecture

- It is highly scalable since each service can be scaled independently.
- It is more resilient since a failure in one service does not affect the other services.
- It is more flexible since each service can be developed and deployed independently.
- Each service can be developed using a different technology stack.

### Disadvantages of Microservice architecture

- It is more complex compared to monolithic architecture.
- It can be difficult to maintain and test since each service is developed and deployed independently.
- The deployment process can be more complicated since each service needs to be deployed independently.

In JavaScript, we call an API using `fetch()` or Promises, right? Now, an important question arises: How do we call an API in React? There are two ways of doing this:

1. User Loads the website, we'll make the API call and then render the page which takes, let's say, 500ms, so the user will see the UI/content after 500ms.

2. User loads the website, we'll render the initial page, then we'll call the API and update the UI which takes, let's say, 100ms in the initial render, 300ms in the API call, and 200ms in updating the UI, in total 600ms.

Which is a good way, the 1st or the 2nd? If you're thinking the first way is a good way, then you're absolutely wrong, my friend! The second way is better because the initial render is happening after 100ms, and the user will see something after 100ms. Whereas in the first way, the user has to wait for 500ms, which is a bad experience for the user.

### useEffect Hook

Now, React gives a very amazing hook, the `useEffect` Hook:

Here is the complete code snippet with an explanation:

```javascript
useEffect(() => {
  // This is the callback function which will be called after rendering the component.
  // It will be called only once when the component is mounted for the first time.

  // Here we are defining an async function called getRestaurantList that will be used to fetch data.
  const getRestaurantList = async () => {
    try {
      // We are using the fetch API to make a GET request to the specified URL.
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      // We are converting the response to JSON format using the json() method.
      const json = await data.json();
      // We are updating the state using the setNewRestaurant and setFilterRestaurantList functions
      // with the data obtained from the JSON response.
      setNewRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      // We are hiding the shimmer effect by updating the state using the setShowShimmer function.
      setShowShimmer(false);
    } catch (e) {
      // If any error occurs during the fetch operation, we are logging it to the console.
      console.log("error encountered" + { e });
    }
  };

  // Here we are calling the getRestaurantList function, which will fetch data and update the state.
  getRestaurantList();
}, []);
```

The `useEffect` hook is a built-in hook in React that allows you to perform side effects in functional components. A side effect can be anything that affects something outside of the component, such as fetching data from an API, modifying the DOM, setting a timer, etc. The `useEffect` hook takes two arguments:

1. A callback function that will be executed after every render cycle. This function is also called the effect function.
2. An array of dependencies. This argument is optional. If it is not provided, the effect function will be called after every render cycle. If it is provided, the effect function will only be called if any of the dependencies have changed since the last render cycle.

In the code above, we are passing an empty array as the second argument to `useEffect`, which means that the effect function will only be called once after the component is mounted. This is useful for fetching data from an API when the component is first rendered.

Inside the effect function, we are defining an async function called `getRestaurantList` that will be used to fetch data from the specified URL. We are using the `await` keyword to wait for the `fetch()` and `json()` methods to return their values before moving on to the next line of code.

After we obtain the data from the API, we are using the `setNewRestaurant` and `setFilterRestaurantList` functions to update the state with the data obtained from the JSON response. We are also using the `setShowShimmer` function to hide the shimmer effect after the data has been fetched.

If any error occurs during the fetch operation, we are logging it to the console.

Finally, we are calling the `getRestaurantList` function inside the effect function, which will fetch data and update the state. This will only happen once after the component is mounted, thanks to the empty array provided as the second argument to `useEffect`.

### Conditional Rendering

```javascript
return showShimmer ? (
  <Shimmer />
) : (
  <div className="h-full w-9/12 mx-auto">
    <SearchBar
      cards={newRestaurants}
      setFilterRestaurantList={setFilterRestaurantList}
    />
    {filterRestaurantList.length === 0 ? (
      <div className="h-screen flex justify-center items-center">
        <div>no restaurant found ☹️</div>
      </div>
    ) : (
      <RestaurantList cards={filterRestaurantList} />
    )}
  </div>
);
```

In this code, we're using a ternary operator to conditionally render either the `<Shimmer />` component or the restaurant list, depending on whether the `showShimmer` state variable is true or false.

Inside the `else` block, we're using another ternary operator to render either a message indicating that no restaurants were found, or the actual list of restaurants, depending on whether the `filterRestaurantList` state variable has any items or not.

This approach to conditional rendering allows us to show different content to the user depending on the current state of our application. It's a powerful technique that's commonly used in React applications.
