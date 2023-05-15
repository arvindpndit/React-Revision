import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { cards } from "../constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [newRestaurants, setNewRestaurant] = useState(cards);
  //website loads => initial render => API call => update the ui with the new data
  //useEffect (callback fn, dependency array)
  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setNewRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.log("error encountered" + { e });
    }
  };

  console.log("render()");
  return (
    <div className="h-full w-9/12 mx-auto">
      <SearchBar cards={cards} setNewRestaurant={setNewRestaurant} />
      <RestaurantList cards={newRestaurants} />
    </div>
  );
};

export default Body;
