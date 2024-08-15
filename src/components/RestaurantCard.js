import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines,avgRating, deliveryTime, costForTwo} = resData?.info;
  
    return(
        <div className="res-card" style= {{backgroundColor: "#FBA834"}} >
            <img className="res-logo" src={ CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;

