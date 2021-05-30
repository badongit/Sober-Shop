import React, { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import {PRODUCT_CATEGORY} from '../../../../constants/global'
import './main.scss'
import '../ProductItem/productItem.scss'

export default function Main() {

    const [limit, setLimit] = useState(5)
    const [loading, setLoading] = useState(false)
    const [listProduct, setListProduct] = useState([...PRODUCT_CATEGORY]);
    // console.log(listProduct);

    const handleClickIncrease = () => {
        
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            // let newListProduct = [ ...listProduct, ...products ]; 
            // setListProduct(newListProduct);
            setLimit(limit+5)
        },2000)
    }
    const newListProduct = [...listProduct, ...PRODUCT_CATEGORY].slice(0, limit)
    console.log(newListProduct);

    return (
        <div> 
            <div className="BestSeller">
            <div className="ProductItem">
                {newListProduct.map((item, index) => {
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
                <div className="loadmore-btn" onClick={handleClickIncrease}>Load More</div>
                {loading === true &&
                    <div>
                        <div className="loading-icon"></div>
                    </div>
                }
            </div>
        </div>
    )
}
