import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Navbar = () => {
  return <div>Navbar</div>;
};

const Body = () => {
  return <div>Body</div>;
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
