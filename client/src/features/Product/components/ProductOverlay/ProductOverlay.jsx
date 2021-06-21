import React, { useState } from 'react'
import {FaCartPlus, FaHeart , FaEye} from 'react-icons/fa'
import './productOverlay.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading'
import cartApi from 'api/cartApi'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Toast from '../Toast/Toast'

export default function ProductOverlay(props) {
    const { product } = props;

    const user = useSelector(state => state.auth.user)

    const history = useHistory();

    const [isWishListLoading, seTisWishListLoading] = useState(false);

    const [isCartLoading, setIsCartLoading] = useState(false);

    const cartClick = async () => {
        try {
            setIsCartLoading(true);

            if (user) {
                const addCartData = await cartApi.add({ productId: product._id, quantity: 1 });
                console.log(addCartData);
            } else {
                history.push('/user')
            }

            setTimeout(() => {
               setIsCartLoading(false);
            }, 1000);
            
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
    
    const redirect = () => {
        window.scrollTo(0,0)
        history.push('/sober/products')
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
                onClick={redirect}
            >
                <FaEye 
                    className="product-icon"
                />
            </div>
            
        </div>
    )
}
