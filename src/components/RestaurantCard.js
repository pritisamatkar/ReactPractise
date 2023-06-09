import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) =>{
    //destructuring props
    const { restData} = props;
   const { cloudinaryImageId,name, cuisines,costForTwo,deliveryTime,avgRating} = restData?.data;
   
    console.log(restData);
    return ( 
        <div className='rest-card' >
            <img  alt ="rest-logo"className='rest-logo' src={ CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + "minutes"}</h4>
        </div>
    )
};

export default RestaurantCard;