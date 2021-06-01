import React from 'react'
import Header from 'components/Header/Header'
import ProductDetail from 'features/Product/components/ProductDetail/ProductDetail'
import ProductReview from 'features/Product/components/ProductReview/ProductReview'

export default function Product() {
    return (
        <div className="Product">
            <Header/>
            <ProductDetail/>
            <ProductReview/>
        </div>
    )
}
