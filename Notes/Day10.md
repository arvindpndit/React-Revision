# Day 10 of revising React

Welcome to Day 9 of revising React! In today's session, we will focus on optimizing our app and making our code production-ready. We'll cover some important concepts and techniques that will improve the performance, maintainability, and readability of our React applications. Let's dive in!

## Functions and Helper Functions

Let's start by discussing functions in JavaScript. Functions are blocks of reusable code that encapsulate a specific task or functionality. They allow us to modularize our code and make it more organized. To keep our helper functions in one place, we'll create a `helper` folder and a `helper.js` file inside it. Here's an example of a helper function called `filteredRestaurantList`:

```javascript
// all helper functions

export const filteredRestaurantList = (searchInput, cards) => {
  const filteredRestaurantListData = cards.filter((card) =>
    card.data.name.includes(searchInput)
  );
  return filteredRestaurantListData;
};
```

## Custom Hooks

Next, we'll explore custom hooks. Custom hooks are a way to extract reusable logic from components, making them more readable, maintainable, and testable. We'll create a custom hook called `useRestaurantMenu` to offload the functionality of getting restaurant menu data. Here's an example of how we can use this custom hook:

```javascript
import { useEffect, useState } from "react";
import { RESTAURANT_LIST_MENU } from "../constants";

const useRestaurantMenu = (menuId) => {
  // Logic of the hook
  // Return the restaurant menu list
};

export default useRestaurantMenu;
```

Let's fill in the logic in our hook:

```javascript
import { useEffect, useState } from "react";
import { RESTAURANT_LIST_MENU } from "../constants";

const useRestaurantMenu = (menuId) => {
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(
        RESTAURANT_LIST_MENU + menuId + "&submitAction=ENTER"
      );
      const json = await data.json();
      const cards =
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;
      setRestaurantMenuList(cards);
    } catch (e) {
      console.log(e);
    }
  };

  return restaurantMenuList;
};

export default useRestaurantMenu;
```

Hurray! We made our first custom hook.

Now, let's create another custom hook. This time, let's create a hook that tells us whether we are online or not. Sounds cool, right? Let's do it!

```javascript
const useOnline = () => {
  // Logic of the hook
  // Return whether the user is online or not
};

export default useOnline;
```

We'll write the logic in a minute, but did you get the technique of building a custom hook? It's simple: define the logic and return the desired value.

To use this hook in our component, we can do the following:

```javascript
const isOnline = useOnline();

if (!isOnline) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>Offline, please check your internet connection</div>
    </div>
  );
}
```

Now, let's write the logic for our `useOnline` hook:

```javascript
import { useEffect, useState } from "react";

const useOnline = () => {
  //logic
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);
  //return
  return isOnline;
};

export default useOnline;
```

Great! We've made our second hook. However, the code we wrote earlier was more suitable for a junior developer. Let's refactor it to follow best practices and write it as a senior developer would:

```javascript
import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
```

Now we have cleaned up the event listeners, making our app more optimized. We have optimized our app, made our code clean, modular, maintainable, testable, and readable.

**Code Optimization - Chunking or Lazy Loading**

The last topic for today is code optimization through chunking or lazy loading. In previous sessions, we learned about Parcel, a bundler that combines everything into a single JavaScript file. However, if our bundle becomes too large, it can negatively impact the app's performance. To address this, we can use chunking or lazy loading.

Imagine we have a section in our app called "About," which contains a significant amount of code and components. To avoid loading it during the initial render, we can lazy load it, meaning it will be loaded only when the user clicks on the "About" section. Here's an example:

In our `App.js`:

```javascript
const About = lazy(() => import("./components/About"));
```

In our route configuration:

```javascript
{
  path: "/about",
  element: (
    <Suspense fallback={<Shimmer />}>
      <About />
    </Suspense>
  ),
}
```

**Conclusion**

In today's session, we covered various topics to optimize our React app and make our code production-ready. We learned about functions, helper functions, and how to create custom hooks to extract reusable logic. We also explored the concept of chunking or lazy loading to improve performance. By applying these techniques, we can create more maintainable, scalable, and efficient React applications.

Keep practicing and stay tuned for more exciting React concepts on our learning journey!
