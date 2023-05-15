import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ cards }) => {
  return (
    <div className=" mt-7 mb-10 flex flex-wrap justify-between gap-5 w-full mx-auto">
      {cards.map((card) => {
        return <RestaurantCard restaurant={card} key={card.data.id} />;
      })}
    </div>
  );
};
export default RestaurantList;
