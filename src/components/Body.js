import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import { cards } from "../constants";
import { useState } from "react";

const Body = () => {
  const [newRestaurants, setNewRestaurant] = useState(cards);
  return (
    <div className="h-full w-9/12 mx-auto">
      <SearchBar cards={cards} setNewRestaurant={setNewRestaurant} />
      <RestaurantList cards={newRestaurants} />
    </div>
  );
};

export default Body;
