import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
const About = lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
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
    ],
  },
]);

root.render(<RouterProvider router={appRoute} />);
