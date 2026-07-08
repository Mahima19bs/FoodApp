import RestaurantCards from "./RestaurentCards";
import restaurantList from "./utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from './Shimmer';
function Body() {
  const [filter, setFilter] = useState([]);
  const [search,setSearchData]=useState("");
  const SWIGGY_API ="https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3850&lng=78.4867&page_type=DESKTOP_WEB_LISTING"
  const [api_data,setApiData]=useState([]);
  useEffect(()=>{
   fetchData();
  },[])
 const fetchData = async () => {
  const data = await fetch(SWIGGY_API);
  const json = await data.json();
  console.log("Swiggi api",json);
  const restaurents=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  setApiData(restaurents);
  setFilter(restaurents);

};
  const filterRating = () => {
    var filteredList = restaurantList.filter(
      (res) => res.info.avgRating > 4
    );

    setFilter(filteredList);
  };

  const SearchData = () => {
  const filteredData = api_data.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(search.toLowerCase())
  );

  setFilter(filteredData);
};

  return (
    (filter.length===0) ? <Shimmer length={20}/> :
    <div className="body">
      <div className="search">Search</div>

    <div>
    <button
        className="top-rated-button"
        onClick={filterRating}
      >
        Top Rated Restaurants
      </button>

       <input type="text" className="input-box" value={search} onChange={(e)=>{setSearchData(e.target.value)}} /><button className="search-button" onClick={SearchData}>Search</button>
    </div>
      
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