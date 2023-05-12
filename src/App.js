import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.querySelector("#root"));

/*
Basic Layout of the application-
 -AppLayout
    -Navbar
    -Body
      -SearchBar
      -RestaurantList
        -RestaurantCard
    -Footer
*/

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
