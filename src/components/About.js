import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";
import React from "react";
import UserContext from "../helper/userContext";

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
        <UserContext.Consumer>
          {
            /* {({ info }) => console.log(info)} */
            ({ info }) => (
              <div>
                <h1>{info.name}</h1>
                <h2>{info.email}</h2>
                <h3>{info.linkedIn}</h3>
              </div>
            )
          }
        </UserContext.Consumer>
        <div className="flex justify-between ">
          {/* <ProfileFunction name={"Arvind"} />
        <ProfileClass name={"Arvind"} /> */}
        </div>
      </div>
    );
  }
}

export default About;
