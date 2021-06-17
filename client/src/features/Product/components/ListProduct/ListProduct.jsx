import React, {useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import './listProduct.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading';

export default function ListProduct({product}) {
    // const { productArr: listProduct } = useSelector(state => state.products);
    // const dispatch = useDispatch();

    const [limit, setLimit] = useState(10);
    // const [listProductItem, setListProductItem] = useState([...listProduct])
    const [loading, setLoading] = useState(false)
    const listProductItem = product;

    const handleClickIncrease = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setLimit(limit+5);
        },2000)
    }
    const limitProduct = listProductItem.slice(0, limit);
    console.log(limitProduct);

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
