import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);
  const param = useParams();
  const { menuId } = param;

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

  {
    if (!restaurantMenuList) return;
  }

  return (
    <div className="min-h-screen w-9/12 mx-auto">
      <div className="py-4">This is Restaurant: {menuId}</div>
      {restaurantMenuList.map((card) => {
        return <RestaurantMenuItem card={card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
