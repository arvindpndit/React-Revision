import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { cards } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../helper/useOnline";

const Body = ({ user }) => {
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
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setNewRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
      setShowShimmer(false);

      console.log(filterRestaurantList);
    } catch (e) {
      console.log("error encountered" + e);
    }
  };

  const isOnline = useOnline();

  if (!isOnline)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Offline, please check your internet connection</div>
      </div>
    );

  return showShimmer ? (
    <Shimmer />
  ) : (
    <div className="h-full w-9/12 mx-auto">
      <SearchBar
        cards={newRestaurants}
        setFilterRestaurantList={setFilterRestaurantList}
      />
      {filterRestaurantList && filterRestaurantList.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div>no restaurant found ☹️</div>
        </div>
      ) : (
        <RestaurantList cards={filterRestaurantList} user={user} />
      )}
    </div>
  );
};

export default Body;
