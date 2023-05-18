import { Res_Image_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData }= props;
    console.log(props);
    return (
        <div className="res-card" style={styleCard}>
            <img src={Res_Image_URL+resData.data.cloudinaryImageId} className="res-logo"/>
            <div className="p-5">
                <h3>{resData.data.name}</h3>
                <h4 className="mx-5">{resData.data.cuisines.join(", ")}</h4>
                <h5 className="mx-5">{resData.data.avgRating} stars</h5>
                <h5 className="mx-5">₹{resData.data.costForTwo/100} for two</h5>
                <h5 className="mx-5">{resData.data.deliveryTime} minutes</h5>
            </div>
        </div>
    );
}

export default RestaurantCard;