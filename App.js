import React from "react";
import ReactDOM from "react-dom";

let root = ReactDOM.createRoot(document.querySelector("#root"));
let heading = React.createElement(
  "h1",
  {
    id: "heading",
    props: "here we pass the props",
  },
  "Hello Arvind"
);
root.render(heading);
