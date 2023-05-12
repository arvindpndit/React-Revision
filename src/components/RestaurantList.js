import { cards } from "../constants";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = () => {
  return (
    <div className=" mt-7 mb-10 flex flex-wrap justify-between gap-5 w-9/12 mx-auto">
      {cards.map((card) => {
        return <RestaurantCard restaurant={card} />;
      })}
    </div>
  );
};
export default RestaurantList;
