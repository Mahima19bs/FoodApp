function RestaurantCards ({ restaurant }) {
  return (
    <div className="res-card">
      <img
        className="rest-img"
        src={restaurant.img}
        alt={restaurant.name}
      />

      <h3>{restaurant.name}</h3>

      <h4>{restaurant.areaName}</h4>

      <h4>{restaurant.cuisines.join(", ")}</h4>

      <h4>{restaurant.costForTwo}</h4>

      <h4>⭐ {restaurant.avgRating}</h4>
    </div>
  );
};

export default RestaurantCards;