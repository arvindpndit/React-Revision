import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { cards } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [showShimmer, setShowShimmer] = useState(true);
  const [newRestaurants, setNewRestaurant] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] =
    useState(newRestaurants);

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
      setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      setShowShimmer(false);
    } catch (e) {
      console.log("error encountered" + { e });
    }
  };

  console.log("render()");
  return showShimmer ? (
    <Shimmer />
  ) : (
    <div className="h-full w-9/12 mx-auto">
      <SearchBar
        cards={newRestaurants}
        setFilterRestaurantList={setFilterRestaurantList}
      />
      <RestaurantList cards={filterRestaurantList} />
    </div>
  );
};

export default Body;
