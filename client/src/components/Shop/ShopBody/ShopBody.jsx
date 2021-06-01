import React, { useState } from 'react'
import {FaTh, FaThLarge, FaCircle, FaFilter} from 'react-icons/fa'
import {PRODUCT_CATEGORY as products} from '../../../constants/global'
import ProductItem from '../../../features/Product/components/ProductItem/ProductItem';
import RangeSlider from '../RangeSlider/RangeSlider';
import './shop.scss'

export default function ShopBody() {

    const [listproduct, setListProduct] = useState([...products]);
    const [currentTab, setCurrentTab] = useState(1);
    const [gridTab, setGridTab] = useState(1)
    const [limit, setLimit] = useState(5);
    const [loading, setLoading] = useState(false);

    // let width, height, parentHeight, marginLeft, marginRight, classWidth = "";
    // if (gridTab === 1) {
    //     width = `${100/6}%`; // six
    //     parentHeight = `${100/6}px`;
    // } else if (gridTab === 2) {
    //     width = '20%'; // five;
    //     parentHeight = '20vw';
    // } else if (gridTab === 3) {
    //     width = '25%'; // four
    //     parentHeight = '25vw';
    // }

    const categories = [
        {
            name: "Accessories",
        },
        {
            name: "Bags",
        },
        {
            name: "Footwear",
        },
        {
            name: "Man",
        },
        {
            name: "Women",
        },
    ]
    
    const handleClickIncrease = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            const newListProduct = [...listproduct, ...products];
            setListProduct(newListProduct)
            setLimit(limit+5)
        },1000)
    }

    const limitProduct = [...listproduct, ...products].slice(0, limit);
    console.log(limitProduct);

    

    return (
        <div className="ShopBody">
            <div className="shopbody-container">
                <div className="shopbody-filter">
                    <div className="shopbody-filter-cate">
                        <div className="shopbody-filter-title">Product Categories</div>
                        <div className="shopbody-filter-catelist">
                            {categories.map((item,index) => {
                                return (
                                    <div key={index}>
                                        {item.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="shopbody-filter-line"></div>
                    </div>
                    <div className="shopbody-filter-size">
                        <div className="shopbody-filter-title">Size</div>
                        <div className="shopbody-filter-catelist">
                            <div>
                                Small
                            </div>
                            <div>
                                Large
                            </div>
                            <div>
                                Medium
                            </div>
                        </div>
                        <div className="shopbody-filter-line"></div>
                    </div>
                    <div className="shopbody-filter-price">
                        <div className="shopbody-filter-title">Price</div>


                    </div>
                    <div>
                        <RangeSlider/>
                    </div>
                    <div className="shopbody-filter-submit">
                        Filter
                    </div>
                </div>

                <div className="shopbody-main">
                    <div className="shopbody-main-container flex">
                        <div className="shopbody-tab flex">
                            <div
                                onClick={() => setCurrentTab(1)}
                                className={currentTab === 1 ? 'shopbody-tab-item active' : 'shopbody-tab-item'}
                            >
                                All Products
                            </div>
                            <div
                                onClick={() => setCurrentTab(2)}
                                className={currentTab === 2 ? 'shopbody-tab-item active' : 'shopbody-tab-item'}
                            >
                                Hot Products
                            </div>
                            <div
                                onClick={() => setCurrentTab(3)}
                                className={currentTab === 3 ? 'shopbody-tab-item active' : 'shopbody-tab-item'}
                            >
                                New Products
                            </div>
                            <div
                                onClick={() => setCurrentTab(4)}
                                className={currentTab === 4 ? 'shopbody-tab-item active' : 'shopbody-tab-item'}
                            >
                                Sales Products
                            </div>
                        </div>

                        <div className="shopbody-option flex">
                            <div className="count">{products.length} products</div>
                            <div className="shopbody-option-grid flex">
                                <div 
                                    className="grid-icon"
                                    onClick={() => setGridTab(1)}
                                >
                                    <FaTh className={gridTab === 1 ? "grid-icon-active" : " "}/>
                                </div>
                                <div
                                    className="grid-icon"
                                    onClick={() => setGridTab(2)}
                                >
                                    <FaThLarge className={gridTab === 2 ? "grid-icon-active" : " "}/>
                                </div>
                                <div
                                    className="grid-icon"
                                    onClick={() => setGridTab(3)}
                                >
                                    <FaCircle className={gridTab === 3 ? "grid-icon-active" : " "}/>
                                </div>
                            </div>
                            <div className="shopbody-option-filter">
                                <FaFilter/>
                                <span>Filter</span>
                            </div>
                        </div>
                    </div>

                    {
                        currentTab === 1 && 
                        <div className="shopbody-products">
                            {limitProduct.map((item,index) => {
                                return (
                                    <ProductItem
                                        key={index}
                                        product={item}
                                        gridTab={gridTab}
                                    />
                                )
                            })}
                        </div>
                    }
                    {
                        currentTab===2 && 
                        <p>Phuong</p>
                    
                    }


                    <div className="loadmore">
                        <div className="loadmore-btn" onClick={handleClickIncrease}>Load More</div>
                        {loading === true &&
                            <div>
                                <div className="loading-icon"></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
