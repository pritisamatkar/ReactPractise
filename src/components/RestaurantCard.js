import React from 'react';
import ReactDOM from 'react-dom/client';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) =>{
    //destructuring props
    const { restData} = props;
   const { cloudinaryImageId,name, cuisines,costForTwo,deliveryTime,avgRating} = restData?.data;
   
    console.log(restData);
    return ( 
        <div className="m-4 p-4 w-[270px] bg-gray-100 rounded-lg" >
            <img  alt ="res-logo" className='w-[250px] h-[200px] rounded-lg' src={ CDN_URL + cloudinaryImageId }/>
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + "minutes"}</h4>
        </div>
    )
};

//Higher order component which takes a component as an input and returns a enhanced component 
export const WithPromotedLabel =( RestaurantCard)=>{
    return(props) => {
        return(
            <div>
                <label className=' absolute bg-black text-white mx-4 p-2'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;