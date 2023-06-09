import { useState, useEffect } from "react";

const ProfileFunction = (props) => {
  const [name, setName] = useState("Arvind");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello, I'm Arvind");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div>This is Functional Component</div>
      <div className="mt-3">Passing Props in functional component? props</div>
      <div>Name : {props.name}</div>
      <div className="mt-3">
        Creating state in functional component ? useState() Hook
      </div>
      <div>{name}</div>
      <button
        className="px-2 py-1 bg-green-400"
        onClick={() => setName("Arvind Pandit Prajapati")}
      >
        Full Name
      </button>
    </div>
  );
};

export default ProfileFunction;
