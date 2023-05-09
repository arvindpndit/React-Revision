import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "1",
  },
  "Heading one"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    key: "2",
  },
  "Heading two"
);

const container = React.createElement("div", {}, [heading1, heading2]);

root.render(container);
