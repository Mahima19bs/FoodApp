import {Link} from 'react-router-dom';
function RestaurantCards ({ restaurant }) {
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
  return (
    
    <div className="res-card">
      <Link to={`/restaurent/${restaurant.id}`}>
      <img
        className="rest-img"
        src={CDN_URL + restaurant.cloudinaryImageId}
        alt={restaurant.name}
      />
      </Link>
      <h3>{restaurant.name}</h3>

      <h4>{restaurant.areaName}</h4>

      <h4>{restaurant.cuisines.join(", ")}</h4>

      <h4>{restaurant.costForTwo}</h4>

      <h4>⭐ {restaurant.avgRating}</h4>
    </div>
  );
};

export default RestaurantCards;