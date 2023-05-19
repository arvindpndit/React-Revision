import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";
import React from "react";

const About2 = () => {};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="h-screen w-9/12 mx-auto">
        <div className="mb-6">This is About Section 🚀</div>
        <div className="flex justify-between ">
          <ProfileFunction name={"Arvind"} />
          <ProfileClass name={"Arvind"} />
        </div>
      </div>
    );
  }
}

export default About;
