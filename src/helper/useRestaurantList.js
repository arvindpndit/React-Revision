import { useEffect, useState } from "react";
const useRestaurantList = (menuId) => {
  //logic of the hook
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
          menuId +
          "&submitAction=ENTER"
      );
      const json = await data.json();
      const cards =
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;
      console.log(cards);
      setRestaurantMenuList(cards);
    } catch (e) {
      console.log(e);
    }
  };
  //return the list of the restaurant
  return restaurantMenuList;
};

export default useRestaurantList;
