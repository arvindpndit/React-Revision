import { useState } from "react";

const userLoggedIn = () => {
  //checking whether the user is logged in or not
  //lets say it returns success
  return false;
};

const Navbar = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="bg-green-50">
      <div className="flex justify-between items-center py-3 bg-green-50 w-9/12 mx-auto rounded-xl ">
        <h1 className="text-4xl font-bold text-green-600">FoodZilla</h1>
        <div className="flex gap-6 text-green-700">
          <div>About</div>
          <div>Contact</div>
          <div>Cart</div>
          {LoggedIn ? (
            <button
              className="px-2 py-1 bg-green-300"
              onClick={() => setLoggedIn(false)}
            >
              Login
            </button>
          ) : (
            <button
              className="px-2 py-1 bg-green-300"
              onClick={() => setLoggedIn(true)}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
