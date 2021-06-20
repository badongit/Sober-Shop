import React, { useState } from 'react'
import NavBar from './navbar'
import MenuDropDown from './MenuDropDown'
import thumbShop from '../../assets/images/women-dropdown.jpg'
import {FaSearch, FaUser, FaCartPlus } from 'react-icons/fa'
import './header.scss'
import { Link } from 'react-router-dom';

export default function Header() {
    const [height, setHeight] = useState(() => window.scrollY);

    window.onscroll = handleSroll;

    function handleSroll(event) {
        const header = document.getElementsByClassName('Header')[0];

        if(window.scrollY - height > 0) {
            if(!header.className.includes('header-notpinned')) 
                header.className += ' header-notpinned';
        } else {
            if(header.className.includes('header-notpinned')) 
                header.className = header.className.replace(' header-notpinned', '');
        }

        setHeight(window.scrollY);
    };

    return (
        <div className="Header">
            <div className="header-container">
                <div className="header-container-left">
                    {NavBar.map((item,index) => {
                        
                        return (
                            <ul key={index} className="menu-item">
                                <li>
                                    <a href={item.url}>{item.title}</a>
                                    { item.dropdown && <MenuDropDown menuDropDown={item.dropdown} image={thumbShop}/>}
                                </li>
                            </ul>
                        )
                    })} 
                </div>
                <div className="header-container-logo">
                    <a href="/">
                        <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo" />
                    </a>
                </div>
                <div className="header-container-right">
                    <div className="cart"><FaSearch/></div>
                    <div className="cart"><Link to='/user'><FaUser/></Link></div>
                    <div className="cart"><FaCartPlus/></div>
                </div>
            </div>
        </div>
    )
}
