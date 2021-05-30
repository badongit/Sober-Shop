import React from 'react'
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
                        <img src={product.img} alt="" />
                    </div>
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
