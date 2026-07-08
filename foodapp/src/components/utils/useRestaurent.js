import { useEffect, useState } from "react";

const useRestaurent = (resId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3850&lng=78.4867&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      const restaurant = restaurants.find(
        (res) => String(res.info.id) === String(resId)
      );

      if (restaurant) {
        setMenuItems(restaurant.info);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return menuItems;
};

export default useRestaurent;