function RestaurantCards ({ restaurant }) {
  console.log(restaurant.cloudinaryImageId);
  const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
  return (
    <Link to="/restaurent/{restaurant.id}">
    <div className="res-card">
      <img
        className="rest-img"
        src={CDN_URL + restaurant.cloudinaryImageId}
        alt={restaurant.name}
      />

      <h3>{restaurant.name}</h3>

      <h4>{restaurant.areaName}</h4>

      <h4>{restaurant.cuisines.join(", ")}</h4>

      <h4>{restaurant.costForTwo}</h4>

      <h4>⭐ {restaurant.avgRating}</h4>
    </div>
    </Link>
  );
};

export default RestaurantCards;