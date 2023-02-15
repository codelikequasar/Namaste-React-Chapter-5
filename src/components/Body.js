import {restaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchInput, restaurants){

    const filterData =  restaurants.filter((restaurant)=>
        restaurant.data.name.includes(searchInput)
    )
    return filterData;
}

// Part 5 using Map
const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    //searchInput is a local state variables (setSearchInput is a function)
    const [searchInput, setSearchInput] = useState(""); // To create state variable

    return (
        <>
            <div className="search-input">
                <input type="type" 
                value={searchInput} 
                onChange={(e)=>{
                    // e.target.value => whatever you write in input
                    setSearchInput(e.target.value);
                }}
                placeholder="Search Here.." />

                <button type="button" 
                className="search-btn" 
                onClick= {()=> {
                    const data = filterData(searchInput, restaurants);
                    setRestaurants(data);
                }}
                >Search</button>
                
            </div>
            <div className="cardBlock">
                {
                    restaurants.map((restaurant)=> {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                    })
                };
            </div>
        </>
    )
};

export default Body;