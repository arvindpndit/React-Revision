import { RESTAURANT_IMG_CDN_LINK } from "../constants";
import { useContext } from "react";
import UserContext from "../helper/userContext";

const RestaurantCard = ({ restaurant, user }) => {
  const { name, cuisines, cloudinaryImageId, costForTwoString } =
    restaurant.data;
  const { info } = useContext(UserContext);

  return (
    <div className="w-72 min-h-72 border shadow-sm hover:shadow-md p-2">
      <img src={RESTAURANT_IMG_CDN_LINK + cloudinaryImageId} alt="food" />
      <div className="font-semibold py-1">{name}</div>
      <div className="text-sm pb-2">{cuisines.join(", ")}</div>
      <div className="text-gray-500">{costForTwoString}</div>
      <div>{info.name}</div>
      {/* <div>{user.name}</div>
      <div>{user.email}</div> */}
    </div>
  );
};
export default RestaurantCard;
