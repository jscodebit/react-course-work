import { Res_Image_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData }= props;
    //console.log(props);
    return (
        <div className="res-card" style={styleCard}>
            <img src={Res_Image_URL+resData.cloudinaryImageId} className="res-logo"/>
            <div className="p-5">
                <h3>{resData.name}</h3>
                <h4 className="mx-5">{resData.cuisines.join(", ")}</h4>
                <h5 className="mx-5">{resData.avgRating} stars</h5>
                <h5 className="mx-5">₹{resData.costForTwo/100} for two</h5>
                <h5 className="mx-5">{resData.deliveryTime} minutes</h5>
            </div>
        </div>
    );
}

export default RestaurantCard;