import React, { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header =() => {
    const [btnName,setBtnName] = useState("Login");
    //useonline custom hook
    const onlineStatus = useOnlineStatus();
    return (
        <div className='flex justify-between bg-gray-100'>
            <div className='logo-container m-4'>
                <img className=" w-[70px]" src={LOGO_URL}/>
            </div>
            <div >
                <ul className='flex p-5 m-4'>
                    <li className='px-4'>OnlineStatus : {onlineStatus ? "✅" : "🔴" }</li>
                    <li className='px-4'> <Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About</Link></li>
                    <li className='px-4'><Link to="/contact">Contact</Link></li>
                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <button className='loginBtn' onClick={ ()=>{ btnName=== "Login" ? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;