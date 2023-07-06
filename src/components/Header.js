import React, { useState } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header =() => {
    const [btnName,setBtnName] = useState("Login");
    //useonline custom hook
    const onlineStatus = useOnlineStatus();
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>OnlineStatus : {onlineStatus ? "✅" : "🔴" }</li>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className='loginBtn' onClick={ ()=>{ btnName=== "Login" ? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;