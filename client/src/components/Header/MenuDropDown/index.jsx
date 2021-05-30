import React from 'react'
import '../header.scss'

function MenuDropDown({menuDropDown, image}) {
    return (
        <div className="MenuDropDown">
            <h3>Shop Pages</h3>
            <div className="menu-dropdown-item">
                <div className="menu-item-list">
                    {menuDropDown.map((item,index) => {
                        return (
                            <ul key={index}>
                                <li><a href={item.url}>{item.name}</a></li>
                            </ul>
                        )
                    })}
                </div>
                <div className="menu-item-img">
                    <img src={image} alt="menu-bgc" />
                </div>
            </div>
        </div>
    )
}

export default MenuDropDown;
