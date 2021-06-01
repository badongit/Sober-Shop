import React, { useState } from 'react'
import IMAGES from '../../../../constants/image'
import {PRODUCT_CATEGORY as products} from '../../../../constants/global'
import ReactStars from 'react-rating-stars-component'
import {FaMinus, FaPlus, FaCartPlus, FaRegHeart, FaAngleRight, FaChevronLeft, FaChevronRight, FaFacebook, FaTwitter, FaPinterest} from 'react-icons/fa'
import './productDetail.scss'
import { Link } from 'react-router-dom'

export default function ProductDetail() {

    const [countCart, setCountCart] = useState(1)
    const [imgIndex, setImgIndex] = useState(0)

    if (imgIndex >= IMAGES.length) setImgIndex(0)

    
    return (
        <div className="ProductDetail">
            <div className="product-leave">
                <Link to="/" className="product-link">Home</Link>
                <FaAngleRight className="arrow"/>
                <Link to="/" className="product-link">Man</Link>
                <FaAngleRight className="arrow"/>
                <span className="product-name-first">{products[1].name}</span>
            </div>
            <div className="product-detail-container">
                <div className="product-gallery flex">
                    <div className="product-small" >
                        {IMAGES && IMAGES.map((item,index) => {
                            return (
                                <div
                                    className={imgIndex === index ? "product-small-item product-small-item-active" : "product-small-item"}
                                    key={index}
                                >
                                    <img 
                                        onClick={() => console.log(setImgIndex(index))}
                                        src={item.img} 
                                        alt="" 
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="product-slider">
                            {IMAGES && IMAGES.map((item, index) => {
                            return (
                                <div className="product-big" style={{ left: `calc(${index - imgIndex}*100%)`}} key={index}>
                                    <div className="product-big-item" >
                                        <img
                                            id={index}
                                            src={item.img}
                                            alt="" 
                                            // onClick={() => setImgIndex(index)}
                                        />
                                    </div>
                                </div>
                                )
                            })}
                        <div 
                            className="change-product left"
                            onClick={() => {
                                if(imgIndex > 0) setImgIndex(imgIndex-1)
                            }}
                        >
                            <FaChevronLeft/>
                        </div>
                        <div 
                            className="change-product right"
                            onClick={() => {
                                if(imgIndex < IMAGES.length && IMAGES.length) setImgIndex(imgIndex+1)
                            }}
                        >
                            <FaChevronRight/>
                        </div>
                    </div>
                </div>

                <div className="product-info-detail">
                    <div className="product-info-title">
                        {products[1].name}
                    </div>
                    <div className="product-info-des">
                        {products[1].comment}
                    </div>
                    <div className="product-info-vote">
                        <ReactStars
                            count={5}
                            size={20}
                            activeColor="#ffd700"
                            className="rating"
                        />
                        <p>(0 customer reviews)</p>
                    </div>
                    <div className="product-info-price">
                        <sup>đ</sup>
                        {products[1].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </div>

                    <div className="product-info-cart">
                        <div className="count-cart">
                            <div 
                                className="count-cart-item left"
                                onClick={() => { if(countCart >1 ) setCountCart(countCart-1)}}
                            >
                                <FaMinus/>
                            </div>
                            <div className="count-cart-item">
                                <input 
                                    type="text" 
                                    value={countCart}
                                    onChange={(e) => setCountCart(e.target.value)}
                                />
                            </div>
                            <div 
                                className="count-cart-item right"
                                onClick={() => setCountCart(countCart+1)}
                            >
                                <FaPlus/>
                            </div>
                        </div>
                        <div className="product-info-addtocart">
                            <FaCartPlus/>
                            <span>Add to cart</span>
                        </div>
                        <div className="product-info-wishlist">
                            <FaRegHeart/>
                        </div>
                    </div>

                    <div className="product-info-line"></div>
                    <div className="product-info-cate">
                        <span>Category: </span>
                        <span>Man</span>
                    </div>
                    <div className="product-info-line"></div>
                    <div className="product-info-social">
                        <i><FaFacebook className="icon"/>facebook</i>
                        <i><FaTwitter className="icon"/>twitter</i>
                        <i><FaPinterest className="icon"/>pinterest</i>
                    </div>

                </div>
            </div>

        </div>
    )
}
