import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "./helper/UserContext";
const About = lazy(() => import("./components/About"));
import { Provider } from "react-redux";
import store from "./helper/store";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  const [user, setUser] = useState({
    info: {
      name: "ArvindPandit",
      email: "arvindpandit9808@gmail.com",
      linkedIn: "https://www.linkedin.com/in/arvindpndit/",
    },
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          info: user.info,
          setUser: setUser,
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Arvind",
              email: "arvindpandit9808@gmail.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/menu/:menuId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoute} />);
