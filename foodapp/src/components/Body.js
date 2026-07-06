import RestaurantCards from "./RestaurentCards";
import restaurantList from "./utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from './Shimmer';
function Body() {
  const [filter, setFilter] = useState(restaurantList);
  useEffect(()=>{
   fetchData();
  },[])
  const fetchData=async()=>{
    // const data=await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3850&lng=78.4867&page_type=DESKTOP_WEB_LISTIN"
    // )
    // const json=await data.json();
    // console.log(json);

  }

  const filterRating = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info.avgRating > 4
    );

    setFilter(filteredList);
  };

  return (
    (filter.length===0) ? <Shimmer/> :
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