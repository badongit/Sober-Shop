import cartApi from 'api/cartApi'
import Loading from 'components/Loading/Loading'
import React, { useState } from 'react'
import {FaCartPlus, FaHeart , FaEye} from 'react-icons/fa'
import './productOverlay.scss'
import '../ProductItem/productItem.scss'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import favouriteProductApi from "api/favouriteProductApi";
import {addCart} from "components/Cart/CartSlice";
import favoriteProductApi from 'api/favoriteProductApi'

export default function ProductOverlay(props) {
    const { product } = props;

    const user = useSelector(state => state.auth.user)

    const history = useHistory();

    const [isWishListLoading, setIsWishListLoading] = useState(false);

    const [isCartLoading, setIsCartLoading] = useState(false);

    const dispatch = useDispatch();

    const cartClick = async () => {
        try {
            setIsCartLoading(true);

            if (user) {
                await dispatch(addCart({ body: { productId: product._id, quantity: 1 } }));
            } else {
                history.push('/user')
            }

               setIsCartLoading(false);       
       } catch (error) {
           console.log(error.message);
       }
    }
    
    
        
    const wishlistClick = async () => {
        try {
            setIsWishListLoading(true);

            const wishListData = await favoriteProductApi.add({ product: product._id, user: user._id })
            
            if (!wishListData.success)
                console.log(wishListData.message);
            
            setIsWishListLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const redirect = () => {
        history.push(`/product/${product._id}`)
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
