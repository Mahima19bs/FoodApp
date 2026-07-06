import RestaurantCards from "./RestaurentCards";
import restaurantList from "./utils/mockData";
import { useState } from "react";

function Body() {
  const [filter, setFilter] = useState(restaurantList);

  const filterRating = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info.avgRating > 4
    );

    setFilter(filteredList);
  };

  return (
    <div className="body">
      <div className="search">Search</div>

      <button
        className="top-rated-button"
        onClick={filterRating}
      >
        Top Rated Restaurants
      </button>

      <div className="res-container">
        {filter.map((restaurant) => (
          <RestaurantCards
            key={restaurant.info.id}
            restaurant={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;