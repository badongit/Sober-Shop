import React, {useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import './listProduct.scss'
import '../ProductItem/productItem.scss'
import Loading from 'components/Loading/Loading';
import { Col, Container, Row } from 'reactstrap';

export default function ListProduct({product}) {
    // const { productArr: listProduct } = useSelector(state => state.products);
    // const dispatch = useDispatch();

    const [limit, setLimit] = useState(12);
    // const [listProductItem, setListProductItem] = useState([...listProduct])
    const [loading, setLoading] = useState(false)
    const listProductItem = product;

    const handleClickIncrease = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setLimit(limit+6);
        },2000)
    }
    const limitProduct = listProductItem.slice(0, limit);
    console.log(limitProduct);

    return (
        <div>
            <div className="BestSeller">
                <div className="ProductItem">
                    <Container fluid="true" >
                        <Row>
                            {limitProduct.map((item,index) => {
                                return (
                                    <Col xl="2" lg="3" key={item._id}>
                                        <ProductItem
                                            product={item}
                                        />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
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
