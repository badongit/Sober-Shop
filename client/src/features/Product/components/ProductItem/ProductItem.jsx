import React from 'react'
import ProductOverlay from '../ProductOverlay/ProductOverlay'
import './productItem.scss'

export default function ProductItem({product}) {
    return (
        <div className="ProductItem">
            <div className="product">
                <div className="product-img">
                    <div className="product-tag">
                        {product.sold}
                    </div>
                    <div className="product-img-bg">
                        <img src={product.thumb[0]} alt="" />
                        <img 
                            className="img-default hide"
                            src={product.thumb[1]}
                            alt="" 
                        />
                    </div>
                    <ProductOverlay/>
                </div>
                <div className="product-title">
                    {product.name}
                </div>
                <div className="product-price">
                    {product.price}
                </div>
            </div>            
        </div>
    )
}
