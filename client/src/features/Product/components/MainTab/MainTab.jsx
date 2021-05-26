import React, { useState } from 'react'
import Main from '../Main/Main'
import './mainTab.scss'

export default function MainTab() {
    
    const [currentTab, setCurrentTab] = useState(1)
    const [isActive, setIsActive] = useState(1)
    
    return (
        <div className="MainTab">
            <div className="main-tab">
                <p 
                    onClick={() => {setCurrentTab(1); setIsActive(1)}}
                    className={isActive === 1 ? 'main-tab-active' : ''}
                >
                    Best Sellers
                </p>
                <p 
                    onClick={() => {setCurrentTab(2); setIsActive(2)}}
                    className={isActive === 2 ? 'main-tab-active' : ''}
                >
                    New Products
                </p>
                <p 
                    onClick={() => {setCurrentTab(2); setIsActive(2)}}
                    className={isActive === 3 ? 'main-tab-active' : ''}
                >
                    Sale Products
                </p>
            </div>
            <div className="tab-content">
                {
                    currentTab === 1 && <Main/>
                }
                {
                    currentTab === 2 && <p>Min</p>
                }
            </div>
            
        </div>
    )
}
