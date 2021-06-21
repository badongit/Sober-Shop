import React, { useEffect, useState } from 'react'
import {FaTh, FaThLarge, FaCircle, FaFilter} from 'react-icons/fa'
import ProductItem from '../../../features/Product/components/ProductItem/ProductItem';
import RangeSlider from '../RangeSlider/RangeSlider';
import './shop.scss'
import categoryApi from 'api/categoryApi';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from 'features/Product/productSlice';
import { Col, Container, Row } from 'reactstrap';

export default function ShopBody() {

    const { productArr: listProduct } = useSelector(state => state.products)
    const productLoading = useSelector(state => state.products.productLoading)
    const dispatch = useDispatch()

    const [listproductItem, setListProductItem] = useState([...listProduct]);
    const [currentTab, setCurrentTab] = useState(1);
    const [gridTab, setGridTab] = useState(1)
    const [limit, setLimit] = useState(8);
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
            setLimit(limit + 4);
        },2000)
    }

    const limitProduct = [...listproductItem].slice(0, limit);

    //hot product
    const hotProduct = listproductItem.filter(product => product.sold >= 40);
    const saleProduct = listproductItem.filter(product => product.discount > 0);
    const newProduct = listproductItem.sort().filter(product => (Date.now() - Date.parse(product.createdAt)) / (3600 * 24 * 1000) < 10)
    // console.log({ hotProduct, saleProduct, newProduct });

    const limitHotProduct = [...hotProduct].slice(0, limit);
    const limitSaleProduct = [...saleProduct].slice(0, limit);
    const limitNewProduct = [...newProduct].slice(0, limit);
    // console.log({limitHotProduct, limitSaleProduct, limitNewProduct});

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
                        currentTab === 1 && (productLoading ? <Loading backgroundColor="black" /> :
                        (
                            <div className="shopbody-products">
                                <Container fluid="true" >
                                    <Row>
                                    {limitProduct.map((item,index) => {
                                        return (
                                            <Col md="4" lg="3" >
                                                 <ProductItem
                                                    key={item.id}
                                                    product={item}
                                                />
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </Container>
                            </div>
                        ))
                    }

                    {
                        currentTab === 2 && (
                            <div className="shopbody-products">
                                <Container fluid="true" >
                                    <Row>
                                    {limitHotProduct.map((item,index) => {
                                        return (
                                            <Col md="4" lg="3" >
                                                 <ProductItem
                                                    key={item.id}
                                                    product={item}
                                                />
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </Container>
                            </div>
                        )
                    }

                    {
                        currentTab === 3 && (
                            <div className="shopbody-products">
                                <Container fluid="true" >
                                    <Row>
                                    {limitNewProduct.map((item,index) => {
                                        return (
                                            <Col md="4" lg="3" >
                                                 <ProductItem
                                                    key={item.id}
                                                    product={item}
                                                />
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </Container>
                            </div>
                        )
                    }

                    {
                        currentTab === 4 && (
                            <div className="shopbody-products">
                                <Container fluid="true" >
                                    <Row>
                                    {limitSaleProduct.map((item,index) => {
                                        return (
                                            <Col md="4" lg="3" >
                                                 <ProductItem
                                                    key={item.id}
                                                    product={item}
                                                />
                                            </Col>
                                        )
                                    })}
                                    </Row>
                                </Container>
                            </div>
                        )
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
