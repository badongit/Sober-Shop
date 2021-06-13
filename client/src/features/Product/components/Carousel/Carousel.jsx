import React, { useState } from 'react'
import ListProduct from '../ListProduct/ListProduct'
import './carousel.scss'

export default function Carousel() {
    
    const [currentTab, setCurrentTab] = useState(1)
    const [isActive, setIsActive] = useState(1)
    
    return (
        <div className="Carousel">
            <div className="main-tab">
                <p 
                    onClick={() => {setCurrentTab(1); setIsActive(1)}}
                    className={isActive === 1 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    Best Sellers
                </p>
                <p 
                    onClick={() => {setCurrentTab(2); setIsActive(2)}}
                    className={isActive === 2 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    New Products
                </p>
                <p 
                    onClick={() => {setCurrentTab(2); setIsActive(2)}}
                    className={isActive === 3 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    Sale Products
                </p>
            </div>
            <div className="tab-content">
                {
                    currentTab === 1 && <ListProduct/>
                }
                {
                    currentTab === 2 && <p>Min</p>
                }
            </div>
            
        </div>
    )
}
