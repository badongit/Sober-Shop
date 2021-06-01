import React from 'react'
import {FaCartPlus, FaHeart, FaEye} from 'react-icons/fa'
import './productOverlay.scss'
import '../ProductItem/productItem.scss'

export default function ProductOverlay() {

    return (
        <div className="Product-Overlay">
            <div className="product-icon-box flex icon-cart">
                <FaCartPlus className="product-icon"/>
            </div>
            <div className="product-icon-box flex icon-wishlist">
                <FaHeart className="product-icon"/>
            </div>
            <div className="product-icon-box flex icon-view">
                    <FaEye 
                        className="product-icon"
                    />
                
            </div>
        </div>
    )
}
