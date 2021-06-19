import React, { useState } from 'react'
import {FaCartPlus, FaRegHeart, FaHeart , FaEye} from 'react-icons/fa'
import './productOverlay.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading'
import cartApi from 'api/cartApi'

export default function ProductOverlay(props) {
    const { product } = props;

    const [isWishListLoading, seTisWishListLoading] = useState(false);

    const [isCartLoading, setIsCartLoading] = useState(false);

    const cartClick = async () => {
        try {
            setIsCartLoading(true);
            const addCartData = await cartApi.add({ productId: product._id, quantity: 1 });

            console.log(addCartData);

            setIsCartLoading(false);

       } catch (error) {
           console.log(error.message);
       }
     }

    const wishlistClick = () => {
        seTisWishListLoading(true);
        setTimeout(() => {
            seTisWishListLoading(false)
        }, 1000);
    }
    
    
    return (
        <div className="Product-Overlay">
            <div className="product-icon-box flex icon-cart" onClick={cartClick}>
                {
                    isCartLoading ? <Loading backgroundColor="#fff" /> : <FaCartPlus className="product-icon" />
                }
            </div>
            <div className="product-icon-box flex icon-wishlist" onClick={wishlistClick}>
                {
                    isWishListLoading ? <Loading backgroundColor="#fff" /> : <FaHeart className="product-icon"/>
                }
            </div>
            <div className="product-icon-box flex icon-view"
                onClick={props.openView}
            >
                <FaEye 
                    className="product-icon"
                />
            </div>
            
        </div>
    )
}
