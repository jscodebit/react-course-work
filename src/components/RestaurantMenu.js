import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Res_Details_URL } from "../utils/constants";
import { Res_Image_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [groupCards, setGroupCards] = useState({});
    
    //How to read a dynamic url params
    const { id } = params;
    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4512177&lng=78.53485069999999&restaurantId="+id+"&submitAction=ENTER";
    console.log("url : "+ url);
    
    console.log(params);

    useEffect(()=>{
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const fetchRestautantDetails = await fetch(url);
        const json = await fetchRestautantDetails.json();
        console.log("fetchRestautantDetails :");
        console.log(json?.data?.cards);
        const details = json?.data?.cards[0]?.card?.card?.info;
        const group = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;//json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.categories[0];
        console.log(group);
        setRestaurantDetails(details);
        if(group[1]?.card?.card["itemCards"]){
            console.log(group[1]?.card?.card["itemCards"]);
            setGroupCards(group[1]?.card?.card["itemCards"]);
        } else if(group[1]?.card?.card["categories"][0]["itemCards"]){
            console.log(group[1]?.card?.card["categories"][0]["itemCards"]);
            setGroupCards(group[1]?.card?.card["categories"][0]["itemCards"]);
        } 
    }
    if(!restaurantDetails && !groupCards){
        return <Shimmer/>;
    } 
    
    return (
        <div className="restaurant-menu">
            <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurantDetails?.name}</h2>
            <img src={Res_Image_URL+restaurantDetails?.cloudinaryImageId}/>
            <h3>{restaurantDetails?.areaName}</h3>
            <h4>{restaurantDetails?.city}</h4>
            <h4>{restaurantDetails?.avgRating}</h4>
            <h4>{restaurantDetails?.costForTwo}</h4>
        </div>
        <div>
            <h1>Menu</h1>
            {
                groupCards?.length === 0 ? "" 
                :(
                    <ul>
                        {Object.values(groupCards || {}).map((item)=>(<li key={item.card.info.id}>{item.card.info.name}</li>))}
                    </ul>
                    )
            }
            
            
        </div>
        </div>
    )
}

export default RestaurantMenu;