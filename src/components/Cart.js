import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../helper/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(removeItems());
  };
  //console.log(cartItems);
  if (cartItems.length == 0)
    return <div className="w-9/12 mx-auto min-h-screen">No Item Present</div>;
  return (
    <div className="w-9/12 mx-auto min-h-screen">
      {cartItems.map((item) => {
        return (
          <div className="text-xl font-semibold text-green-600">{item}</div>
        );
      })}
      <button className="px-2 py-1 bg-green-400" onClick={removeItemHandler}>
        Clear Cart
      </button>
    </div>
  );
};
export default Cart;
