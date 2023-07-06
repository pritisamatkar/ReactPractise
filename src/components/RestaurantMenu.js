import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestorantMenu from "../utils/useRestrorantMenu";


const RestaurantMenu = () =>{
    const {restId} = useParams();
    console.log(restId);
    //custom hook useRestorantMenu
    const resInfo = useRestorantMenu(restId);
   
    if( resInfo === null) return <Shimmer />
   const {name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
   const { itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);
   
    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <ul>
                {
                    itemCards?.map( item => 
                    <li key={item.card.info.id}> {item.card.info.name} - Rs-{item.card.info.price/100} </li>
                    )
                }
                <li>{name}</li>
            </ul>
            
        </div>
    )
}

export default RestaurantMenu;