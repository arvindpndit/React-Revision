import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arvind",
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    //the best place to call an api
    //because it is called after render , cool , right???
    console.log("Child componentDidMount");
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child render");
    return (
      <div>
        <div>This is Class Component</div>
        <div className="mt-3">Passing Props in class component? this.props</div>
        <div>Name: {this.props.name}</div>
        <div className="mt-3">
          Creating state in class component ? this.state
        </div>
        <div>{this.state.name}</div>
        <button
          className="px-2 py-1 bg-green-400"
          onClick={() => {
            this.setState({
              name: "Arvind Pandit Prajapati",
            });
          }}
        >
          Full Name
        </button>
      </div>
    );
  }
}

export default ProfileClass;
