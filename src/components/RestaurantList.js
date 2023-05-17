import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ cards }) => {
  return (
    <div className=" mt-7 mb-10 flex flex-wrap justify-between gap-5 w-full mx-auto">
      {cards &&
        cards.map((card) => {
          return (
            <Link key={card.data.id} to={"/restaurant/menu/" + card.data.id}>
              <RestaurantCard restaurant={card} />
            </Link>
          );
        })}
    </div>
  );
};
export default RestaurantList;
