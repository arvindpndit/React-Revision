const RestaurantMenuItem = ({ card }) => {
  const { name, imageId, price } = card?.card?.info;
  return (
    <div>
      <div className="flex gap-10  px-60 justify-between py-1">
        <div className="text-xl font-semibold text-green-600">{name}</div>
        <div className="text-green-900">{price / 100 + " Rs"}</div>
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
