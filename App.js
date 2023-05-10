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
  return (
    <div className="flex justify-between items-center py-3 bg-green-50 px-5">
      <h1 className="text-4xl font-semibold">Food Villa</h1>
      <div className="flex gap-6">
        <div>Home</div>
        <div>Service</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="h-screen">
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
  return (
    <div className="flex justify-center bg-slate-600 py-3 text-white">
      <div>This is React-Revision by Arvind Pandit</div>
    </div>
  );
};

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
