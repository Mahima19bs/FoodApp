import { useParams } from "react-router-dom";
import useRestaurent from "./utils/useRestaurent";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const menuItems = useRestaurent(resId);

  if (!menuItems) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Restaurant Menu</h1>

      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          menuItems.cloudinaryImageId
        }
        alt={menuItems.name}
        width="200"
      />

      <h3>{menuItems.name}</h3>
      <h3>{menuItems.costForTwo}</h3>
      <h3>⭐ {menuItems.avgRating}</h3>
      <h3>{menuItems.areaName}</h3>

      <h3>Cuisines</h3>
      <ul className="menu">
        {menuItems.cuisines?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;