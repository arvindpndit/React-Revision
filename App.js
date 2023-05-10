import React from "react";
import ReactDOM from "react-dom/client";

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

const Navbar = () => {
  return <div>Navbar</div>;
};

const Body = () => {
  return (
    <div>
      <RestaurantList />
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div>
      <RestaurantCard />
    </div>
  );
};

const RestaurantCard = () => {
  return <div>RestaurantCard</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

root.render(<AppLayout />);
