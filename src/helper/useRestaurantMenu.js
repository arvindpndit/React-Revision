import { useEffect, useState } from "react";
import { RESTAURANT_LIST_MENU } from "../constants";

const useRestaurantMenu = (menuId) => {
  //logic of the hook
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(
        RESTAURANT_LIST_MENU + menuId + "&submitAction=ENTER"
      );
      const json = await data.json();
      const cards =
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;
      setRestaurantMenuList(cards);
    } catch (e) {
      console.log(e);
    }
  };
  //return the list of the restaurant
  return restaurantMenuList;
};

export default useRestaurantMenu;
