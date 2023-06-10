import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard  from './RestaurantCard';
import Shimmer from './shimmer';
import { async } from 'q';

const Body = () =>{

    // useState hook
    const [ listRestro, setListRestro] = useState([]);
    useEffect ( ()=>{
       fetchData();
    },[]);
   
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6488417&lng=73.7521986&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optional chaning
        setListRestro(json?.data?.cards[2]?.data?.data?.cards);
    };
    if(listRestro.length === 0){
        return <Shimmer />
    }
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter_btn' onClick={ ()=> {
                     const filterList = listRestro.filter( (res) => res.data.avgRating > 4)
                     console.log(filterList);
                     setListRestro(filterList);
                    }}
                    >
                    Top Rated Restaurant</button>
            </div>
            <div className='restContainer'>
            {
                listRestro.map( restaurant => <RestaurantCard
                key= {restaurant.data.id}
                restData ={restaurant}
                />)
            }
           
            
            </div>
        </div>
    )
};

export default Body;