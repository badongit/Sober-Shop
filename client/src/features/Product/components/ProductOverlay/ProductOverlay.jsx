import React, { useState } from 'react'
import {FaCartPlus, FaRegHeart, FaHeart , FaEye} from 'react-icons/fa'
import './productOverlay.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading'
import cartApi from 'api/cartApi'

export default function ProductOverlay(props) {
    const { product } = props;

    const [loading, setLoading] = useState(false)

    const cartClick = async () => {
        try {
            setLoading(true);
            const addCartData = await cartApi.add({ productId: product._id, quantity: 1 });

            setLoading(false);

       } catch (error) {
           console.log(error.message);
       }
     }

    const wishlistClick = () => {
        setLoading(2);
        setTimeout(() => {
            setLoading(0)
        }, 1000);
    }
    
    
    return (
        <div className="Product-Overlay">
            <div className="product-icon-box flex icon-cart" onClick={cartClick}>
                {
                    loading ? <Loading backgroundColor="#fff" /> : <FaCartPlus className="product-icon" />
                }
            </div>
            <div className="product-icon-box flex icon-wishlist" onClick={wishlistClick}>
                {
                    loading ? <Loading backgroundColor="#fff" /> : <FaHeart className="product-icon"/>
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
