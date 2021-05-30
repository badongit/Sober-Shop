import React from 'react'
import NavBar from './navbar'
import MenuDropDown from './MenuDropDown'
import thumbShop from '../../assets/images/women-dropdown.jpg'
import {FaSearch, FaUser, FaCartPlus } from 'react-icons/fa'
import './header.scss'

export default function Header() {
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
                    <div className="cart"><FaUser/></div>
                    <div className="cart"><FaCartPlus/></div>
                </div>
            </div>
        </div>
    )
}
