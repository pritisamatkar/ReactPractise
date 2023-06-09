import React from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard  from './RestaurantCard';
import restList from '../utils/mockData'; 

const Body = () =>{
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter_btn' onClick={ ()=> {
                     restLis = restList.filter( (res) => res.data.avgRating > 4)
                     console.log(restLis);
                    }}
                    >
                    Top Rated Restaurant</button>
            </div>
            <div className='restContainer'>
            {
                restList.map( restaurant => <RestaurantCard
                key= {restaurant.data.id}
                restData ={restaurant}
                />)
            }
           
            
            </div>
        </div>
    )
};

export default Body;