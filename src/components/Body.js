import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard  from './RestaurantCard';
import restList from '../utils/mockData'; 

const Body = () =>{

    // useState hook
    const [ listRestro, setListRestro] = useState(restList);
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