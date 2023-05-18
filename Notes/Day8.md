# Day 8 of revising React

Today, we will be focusing on learning and revising React Router, an essential library for handling routing in React applications.

## React Router

React Router is a popular library that provides navigation and routing functionality to React applications. It allows you to create declarative routes and handle navigation between different components without the need for a full page reload. React Router helps in building single-page applications (SPAs) by managing the UI state and rendering components based on the current URL.

## Installation

To install React Router in your React application, follow these steps:

1. Open your terminal.
2. Navigate to your project directory.
3. Run the following command: `npm i react-router-dom` or `npm install react-router-dom`.

## Creating Routing Configuration

After installing the React Router package, you can create the routing configuration using `createBrowserRouter`. The routing configuration defines the paths and corresponding components to be rendered for each route.

```javascript
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

In the code above, we define two routes: one for the root path ("/") and another for the "/about" path. The `element` property specifies the component to be rendered when the respective route is accessed.

## Providing the Routing Configuration to the App

To make the routing configuration available to your app, you need to provide it using the `RouterProvider` component from React Router.

```javascript
root.render(<RouterProvider router={appRoute} />);
```

The code snippet above demonstrates how to render the app with the `RouterProvider` component, passing the `appRoute` as the `router` prop.

## Handling Errors

React Router provides an error handling mechanism to handle invalid routes or errors during navigation. You can define an error page and include it in the routing configuration using the `errorElement` property.

```javascript
const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>Oops! Something went wrong.</div>
      <div>{status + " : " + statusText}</div>
    </div>
  );
};

// In routing config:
{
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />,
}
```

The above code shows an example of an error page component. It retrieves error information using the `useRouteError` hook provided by React Router. The `errorElement` property in the routing configuration specifies the component to be rendered when an error occurs.

## Link Tag by React Router

React Router provides the `Link` component to handle navigation between different routes within your application. It creates an anchor tag (`<a>`) with the specified destination route.

```jsx
<Link to="/about">About</Link>
```

In the code snippet above, the `Link` component is used to create a link to the "/about" route. When clicked, it will navigate the user to the specified route without triggering a full page reload.

## Creating Nested Routing

React Router allows you to create nested routes by nesting route configurations inside parent routes. The nested routes are rendered within an `<Outlet>` component provided by React Router.

```javascript
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
```

In the code above, the `children` property is used to define nested routes within the parent route specified by the `path` property. The components specified in the `element` property will be rendered within the `<Outlet>` component.

## Creating Dynamic Routing

React Router supports dynamic routing, where a portion of the route can be dynamic and read using the `useParams` hook provided by React Router.

```javascript
{
  path: "/restaurant/menu/:menuId",
  element: <RestaurantMenu />,
}
```

In the code snippet above, the `:menuId` portion of the route represents a dynamic parameter that can be accessed using the `useParams` hook. The `RestaurantMenu` component can access the dynamic `menuId` using `const param = useParams()`.

The `RestaurantMenu` component example demonstrates fetching restaurant menu data based on the `menuId` parameter and rendering the menu items accordingly.

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);
  const param = useParams();
  const { menuId } = param;

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
          menuId +
          "&submitAction=ENTER"
      );
      const json = await data.json();
      const cards =
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;
      console.log(cards);
      setRestaurantMenuList(cards);
    } catch (e) {
      console.log(e);
    }
  };

  if (!restaurantMenuList) return null;

  return (
    <div className="min-h-screen w-9/12 mx-auto">
      <div className="py-4">This is Restaurant: {menuId}</div>
      {restaurantMenuList.map((card) => (
        <RestaurantMenuItem card={card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
```

The `RestaurantMenu` component shown above fetches menu data based on the `menuId` parameter and renders the menu items accordingly. It utilizes the `useEffect` hook to fetch the data when the component mounts and the `useState` hook to manage the fetched menu data.

## Conclusion

This was an overview of React Router and its various features. By understanding and implementing React Router, you can easily manage routing and navigation in your React applications. Feel free to explore the code examples and modify them to suit your specific use cases. Happy routing!
