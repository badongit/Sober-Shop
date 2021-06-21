import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaSearch, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './header.scss'
import NavBar from './navbar'

export default function Header() {
    const [height, setHeight] = useState(() => window.scrollY);

    useEffect(() => {
        const header = document.getElementsByClassName('Header')[0];

        function handleScroll() {
    
            if(window.scrollY - height > 0) {
                if(!header.className.includes('header-notpinned')) 
                    header.className += ' header-notpinned';
            } else {
                if(header.className.includes('header-notpinned')) 
                    header.className = header.className.replace(' header-notpinned', '');
            }
    
            setHeight(window.scrollY);
        }
        
        window.addEventListener('scroll', handleScroll);
        
        if(window.scrollY) {
            if(header.className.includes('header-top')) 
                header.className =  header.className.replace(' header-top', '');
        } else {
            if(!header.className.includes('header-top')) 
                header.className += ' header-top';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className="Header">
            <div className="header-container">
                <div className="header-container-left">
                    {NavBar.map((item,index) => {
                        
                        return (
                            <ul key={index} className="menu-item">
                                <li>
                                    <a href={item.url}>{item.title}</a>
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
