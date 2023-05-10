import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

//JSX => React.createElement => object => HTML(DOM)

//functional component
const Heading1 = () => {
  return <h2>this is heading 2</h2>;
};

//react element
const heading2 = (
  //JSX
  <h2 id="heading2" key="2">
    Heading Two
  </h2>
);

//functional component
const Heading = () => {
  return (
    <>
      <h1>Namaste, this is functional component</h1>
      {heading2}
      <Heading1 />
    </>
  );
};

root.render(<Heading />);
