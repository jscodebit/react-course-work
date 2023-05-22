import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {

  //State variable
  let [restaurants, setRestaurants] = useState(restaurantList);
  let [searchText, setSearchText] = useState("");
  

  //Normal JavaScript variable
  // let restaurantList2 = ;

  useEffect(()=> {
    console.log("useEffect");
    getRestaurants();
  }, [])
  console.log("re-renders");

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4512177&lng=78.53485069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data.cards[2].data.data.cards);
  }

  const filterData = (searchString, resData) => {
    console.log(searchString);
    console.log(resData);
    return resData.filter((res) => res.data.name.includes(searchString));
  }

  return (
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
                let filteredRestaurant = filterData(searchText, restaurants);
                console.log(filteredRestaurant);
                setRestaurants(filteredRestaurant);
                console.log(restaurantList);
              }}
              >Top rated restaurant</button>
        </div>
        <div className="res-container">
            {restaurants.map((restaurant) => {
              return (<RestaurantCard key={restaurant.data.id} resData={restaurant.data}/>)
            })}
        </div>
    </div>
  );
}

export default Body;