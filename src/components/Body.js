import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './shimmer';

import { Link } from "react-router-dom";
const Body = () => {

  //State variable
  let [allRestautants, setAllRestautants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  

  //Normal JavaScript variable
  // let restaurantList2 = ;

  useEffect(()=> {
    console.log("useEffect");
    getRestaurants()
  }, [searchText])
  console.log("re-renders");

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4512177&lng=78.53485069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestautants(json?.data?.cards[1]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const filterData = (searchString, resData) => {
    console.log(searchString);
    console.log(resData);
    return resData.filter((res) => res?.data?.name?.toLowerCase().includes(searchString.toLowerCase()));
  }

  //Conditional Rendering
  //if restaurant is empty => shimmer UI
  //if restaurant has data => actual data UI
  if(!allRestautants) return null;

  // if(filteredRestaurants?.length === 0)
  //   return 
  // console.log("filteredRestaurants : ");
  // console.log(filteredRestaurants);
  return allRestautants.length === 0 ? (<Shimmer/>) : (
    <div className="app-body">
        <div className="filter">
            <input 
              type="text" 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              />
            <button 
              className="btn-res-filter" 
              onClick={() => {
                //console.log("Button Clicked!");
                let filteredRestaurant = filterData(searchText, allRestautants);
                console.log(filteredRestaurant);
                setFilteredRestaurants(filteredRestaurant);
                // console.log(restaurantList);
              }}
              >Top rated restaurant</button>
        </div>
        <div className="res-container">
            {(filteredRestaurants?.length === 0) ? <h1>No restaurant match your Filter!</h1> : filteredRestaurants?.map((restaurant) => {
              return (<Link key={restaurant.data.id} to={"/restaurant/"+restaurant.data.id}><RestaurantCard key={restaurant.data.id} resData={restaurant.data}/></Link>)
            })}
        </div>
    </div>
  );
}

export default Body;