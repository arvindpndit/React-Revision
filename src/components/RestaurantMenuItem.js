import { useDispatch } from "react-redux";
import { addItems } from "../helper/cartSlice";

const RestaurantMenuItem = ({ card }) => {
  const { name, imageId, price } = card?.card?.info;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItems(name));
  };
  return (
    <div>
      <div className="flex gap-10  px-60 justify-between py-1">
        <div className="text-xl font-semibold text-green-600">{name}</div>
        <div className="flex gap-3">
          <div className="text-green-900">{price / 100 + " Rs"}</div>
          <button className="px-2 py-1 bg-green-400" onClick={addItemHandler}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuItem;
