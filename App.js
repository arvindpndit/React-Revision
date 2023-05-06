let root = ReactDOM.createRoot(document.querySelector("#root"));
let heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello Arvind"
);
root.render(heading);
