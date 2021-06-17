import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListProduct from '../ListProduct/ListProduct'
import { getAllProduct } from 'features/Product/productSlice';
import './carousel.scss';
import Loading from 'components/Loading/Loading';

export default function Carousel() {

    const dispatch = useDispatch();

    const productArr = useSelector(state => state.products.productArr);
    const productLoading = useSelector(state => state.products.productLoading);

    const [currentTab, setCurrentTab] = useState(1);
    const [isActive, setIsActive] = useState(1);

    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch]);

    const saleProduct = productArr.filter(product => product.discount > 0);

    console.log({ saleProduct });
    
    const newProduct = productArr.filter(product => (Date.now() - Date.parse(product.createdAt)) / (1000 * 3600 * 24) < 10);

    console.log({ newProduct });

    return (
        <div className="Carousel">
            <div className="main-tab">
                <p 
                    onClick={() => {setCurrentTab(1); setIsActive(1)}}
                    className={isActive === 1 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    Best Sellers
                </p>
                <p 
                    onClick={() => {setCurrentTab(2); setIsActive(2)}}
                    className={isActive === 2 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    New Products
                </p>
                <p 
                    onClick={() => {setCurrentTab(3); setIsActive(3)}}
                    className={isActive === 3 ? 'main-tab-item active' : 'main-tab-item'}
                >
                    Sale Products
                </p>
            </div>
            <div className="tab-content">
                {
                    currentTab === 1 && ( productLoading ? <Loading backgroundColor="black" /> : <ListProduct product={productArr}/>)
                }
                {
                    currentTab === 2 && <ListProduct product={newProduct}/>
                }
                {
                    currentTab === 3 && <ListProduct product={saleProduct}/>
                }
            </div>
            
        </div>
    )
}
