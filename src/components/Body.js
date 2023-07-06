import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantCard  from './RestaurantCard';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () =>{

    // useState hook
    //keeping original list of restro intact
    const [ listRestro, setListRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    // filter Restro state to filter out data
    const [ filteredListRestro, setFilteredListRestro] = useState([]);
    useEffect ( ()=>{
       fetchData();
    },[]);
   
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6488417&lng=73.7521986&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optional chaning
        setListRestro(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredListRestro(json?.data?.cards[2]?.data?.data?.cards);
    };
    //conditional rendering
   /*  if(listRestro.length === 0){
        return <Shimmer />
    } */

    const onlineStatus = useOnlineStatus();
    if( onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>
    return listRestro.length === 0 ? <Shimmer/> :(
        <div className='body'>
           
            <div className='filter'>
            <div className='search'>
                <input type='text'  className='search-box' value={searchText} onChange={ (e) =>{
                    setSearchText( e.target.value)
               }}/>
                <button onClick={ () => {
                    //filter the restro cards and update the UI
                    console.log(searchText);
                    const filterRestraurants = listRestro.filter(
                        (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredListRestro(filterRestraurants);
                }}>Search</button>
            </div>
                <button className='filter_btn' onClick={ ()=> {
                     const filterList = listRestro.filter( (res) => res.data.avgRating > 4)
                     console.log(filterList);
                     setFilteredListRestro(filterList);
                    }}
                    >
                    Top Rated Restaurant</button>
            </div>
            <div className='restContainer'>
            {
                filteredListRestro.map( restaurant => 
                <Link 
                     key= {restaurant.data.id} 
                     to={"/restaurants/" + restaurant.data.id}>
                        <RestaurantCard restData ={restaurant}/>
                </Link>
                )
            }
           
            
            </div>
        </div>
    )
};

export default Body;