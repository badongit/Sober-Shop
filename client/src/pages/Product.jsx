import React, {useEffect} from 'react'
import Header from 'components/Header/Header'
import ProductDetail from 'features/Product/components/ProductDetail/ProductDetail'
import ProductReview from 'features/Product/components/ProductReview/ProductReview'
import { getAllProduct } from 'features/Product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Product(props) {

    const { product } = props;
    const dispatch = useDispatch();
    const productArr = useSelector(state => state.products.productArr)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])
    
    const products = [...productArr].find(item => item._id === product._id)

    return (
        <div className="Product">
            <Header />
            <ProductDetail product={products}/>
            <ProductReview/>
        </div>
    )
}
