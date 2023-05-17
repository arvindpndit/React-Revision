import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const param = useParams();
  const { menuId } = param;
  return <div className="h-screen">This is Restaurant: {menuId}</div>;
};

export default RestaurantMenu;
