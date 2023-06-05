import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuItem from "./RestaurantMenuItem";
import useRestaurantMenu from "../helper/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../helper/cartSlice";

const RestaurantMenu = () => {
  const param = useParams();
  const { menuId } = param;
  const restaurantMenuList = useRestaurantMenu(menuId);
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItems("arvind"));
  };

  return (
    <div className="min-h-screen w-9/12 mx-auto">
      <div className="py-4">This is Restaurant: {menuId}</div>
      <button onClick={addItemHandler}>add</button>
      {restaurantMenuList &&
        restaurantMenuList.map((card) => {
          return <RestaurantMenuItem key={card.card.info.id} card={card} />;
        })}
    </div>
  );
};

export default RestaurantMenu;
