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

export default function ProductOverlay(props) {
    const { product } = props;

    const user = useSelector(state => state.auth.user)

    const history = useHistory();

    const [isWishListLoading, seTisWishListLoading] = useState(false);

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

            setTimeout(() => {
               setIsCartLoading(false);
            }, 1000);
            
       } catch (error) {
           console.log(error.message);
       }
    }
    
    
        
    const wishlistClick = async () => {
      try {
        seTisWishListLoading(true);
        console.log(user)

        if (user) {
          await favouriteProductApi.add({ product: product._id });
        } else {
          history.push('/user')
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setTimeout(function () {
          seTisWishListLoading(false);
        }, 1000);
      }
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
