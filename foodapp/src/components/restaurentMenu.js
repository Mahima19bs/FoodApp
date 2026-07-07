import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom;'
const RestaurentCards=()=>{
    const {resId}=useParams();
    const [apiData,setApiData]=useState([]);
   useEffect(()=>{
    const api=`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3850&lng=78.4867&restaurantId=${resId}`,
    const json=api.json();
    setApiData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   },[])
  return(
   <div>
    <h3>{apiData.name}</h3>
    <h3>{apiData.areaName}</h3>
    <h3>{apiData.costForTwo}</h3>
    <h3>{apiData.avgRating}</h3>
    <h3>{apiData.cuisines.join(", ")}</h3>
    <h2>Recommendation menu</h2>
    {
        apiData.items.map((res,i)=>{
            <div key={i}>
            <h5>{res.name}</h5>
            <h5>{res.img}</h5>
            <h5>{res.cost}</h5>
            </div>
        })
    }
   </div>
  )
}
export default RestaurentCards;