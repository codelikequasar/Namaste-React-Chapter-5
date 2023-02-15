import {IMG_CDN_URL} from "../config";

//Destructing Part 3
const RestaurantCard = ({name, cuisines, totalRatingsString, cloudinaryImageId}) => {


    return (
        <div className="card">
            <img src={
                IMG_CDN_URL + cloudinaryImageId} alt="food-image"/>
            <div className="card-inner">
                <h2>{name}</h2>
                <p>{cuisines.join(" , ")}</p>
                <p>{totalRatingsString} Stars</p>
            </div>            
        </div>
    );
};

export default RestaurantCard;