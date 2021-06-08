import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
// import {PRODUCT_CATEGORY} from '../../../../constants/global'
import './listProduct.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from 'features/Product/productSlice';

export default function ListProduct() {
    const { productArr: listProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const [limit, setLimit] = useState(5);
    const [listProductItem, setListProductItem] = useState([...listProduct])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            try {
                await dispatch(getAllProduct());
                
            } catch (error) {
                console.log('Failed to get product list', error);
            }
        }
        
        getProduct();
    }, [dispatch])

    const handleClickIncrease = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            const newListProduct = [...listProductItem, ...listProduct];
            setListProductItem(newListProduct);
            setLimit(limit+5);
        },2000)
    }
    const limitProduct = [...listProductItem].slice(0, limit)
    console.log(limitProduct);

    // const renderListProduct = productLoading ? <Loading/> : (
    //     <div className="BestSeller">
    //         <div className="ProductItem">
    //             {limitProduct.map((item, index) => {
    //                     return (
    //                         <ProductItem
    //                             key={index}
    //                             product={item}
    //                         />
    //                     )
    //                 })}
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <div className="BestSeller">
                <div className="ProductItem">
                    {limitProduct.map((item, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    product={item}
                                />
                            )
                        })}
                </div>
            </div>
            <div className="loadmore">
                <div className="loadmore-btn">
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
    )
}
