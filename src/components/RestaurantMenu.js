import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuItem from "./RestaurantMenuItem";
import useRestaurantList from "../helper/useRestaurantList";

const RestaurantMenu = () => {
  const param = useParams();
  const { menuId } = param;
  const restaurantMenuList = useRestaurantList(menuId);

  return (
    <div className="min-h-screen w-9/12 mx-auto">
      <div className="py-4">This is Restaurant: {menuId}</div>
      {restaurantMenuList &&
        restaurantMenuList.map((card) => {
          return <RestaurantMenuItem card={card} />;
        })}
    </div>
  );
};

export default RestaurantMenu;
