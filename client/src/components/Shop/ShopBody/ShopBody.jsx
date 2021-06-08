import React, { useEffect, useState } from 'react'
import {FaTh, FaThLarge, FaCircle, FaFilter} from 'react-icons/fa'
// import {PRODUCT_CATEGORY as products} from '../../../constants/global'
import ProductItem from '../../../features/Product/components/ProductItem/ProductItem';
import RangeSlider from '../RangeSlider/RangeSlider';
import './shop.scss'
import categoryApi from 'api/categoryApi';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from 'features/Product/productSlice';

export default function ShopBody() {

    const {productArr: listProduct} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [listproductItem, setListProductItem] = useState([...listProduct]);
    const [currentTab, setCurrentTab] = useState(1);
    const [gridTab, setGridTab] = useState(1)
    const [limit, setLimit] = useState(5);
    const [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await categoryApi.getAll();
                console.log(response);
                setCategories(response.data);
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        }

        fetchCategory();
    }, []);

    useEffect(() => {
        
        const getProduct = async () => {
            try {
                await dispatch(getAllProduct())
            } catch (error) {
                console.log(error);
            }
        }
        
        getProduct();
    }, [dispatch])

    const handleClickIncrease = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            const newListProduct = [...listproductItem, ...listProduct];
            setListProductItem(newListProduct)
            setLimit(limit+5)
        },2000)
    }

    const limitProduct = [...listproductItem].slice(0, limit);
    // console.log(limitProduct);


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
                            <div className="count">{listProduct.length} products</div>
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
                        <div className="loadmore-btn" onClick={handleClickIncrease}>
                        {
                            loading === false &&
                            <div className="loadmore-btn-text btn" onClick={handleClickIncrease}>
                                Load more
                            </div>
                        }
                        {
                            loading === true &&
                            <div className="loadmore-loading btn">
                                <Loading/>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
