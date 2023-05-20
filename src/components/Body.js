import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {

  //State variable
  let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  //Normal JavaScript variable
  // let restaurantList2 = ;

    return (
        <div className="app-body">
            <div className="filter">
                <input type="text"/>
                <button 
                  className="btn-res-filter"
                  onClick={() => {
                    //console.log("Button Clicked!");
                    let filteredRestaurant = listOfRestaurants.filter((r) => r.data.avgRating > 4);
                    setListOfRestaurants(filteredRestaurant);
                    console.log(restaurantList);
                  }}
                  >Top rated restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)}
            </div>
        </div>
    );
}

export default Body;