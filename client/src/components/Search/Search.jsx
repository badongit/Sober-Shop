import React, { useEffect, useState } from 'react'
import './search.scss'
import {FaTimes} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import categoryApi from 'api/categoryApi'
import { useHistory } from 'react-router-dom'
import productApi from 'api/productApi'
import { Col, Container, Row } from 'reactstrap';
import ProductItem from 'features/Product/components/ProductItem/ProductItem'

export default function Search() {

    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const [productItem, setProductItem] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const history = useHistory();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await categoryApi.getAll();
                setCategories(res.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        getCategory()
    }, [])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await productApi.getAll();
                setProduct(res.data)
                setProductItem(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        getProduct()
    }, [])

    const handleClose = () => {
        history.push('/')
    }

    const handeCloseInput = () => {
        setSearchInput("")
        setProduct([])
    }

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
        const search = []
        for (let i in productItem) {
            if ((productItem[i].name).toLowerCase().includes(searchInput)) {
                search.push(productItem[i])
            }
        }
        setProduct(search)
    }

    return (
        <div className="search">
            <div className="search-header">
                <div className="search-header__title">Search</div>
                <div className="search-header__close">
                    <FaTimes onClick={handleClose}/>
                </div>
            </div>
            <div className="search-cate">
                {
                    categories.map((item) => {
                        return (
                            <div key={item._id} className="search-cate__item">
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className="search-form">
                    <form>
                        <AiOutlineSearch className="search-icon"/>
                        <input
                            type="text"
                            placeholder="Search product..."
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <FaTimes
                            className="close-icon"
                            // onClick={() => setSearchInput("")}
                            onClick={handeCloseInput}
                        />
                    </form>
                </div>
                {
                    (product.length > 0 && searchInput !== " ") &&
                    <Container fluid="true" style={{marginTop: '200px'}}>
                        <Row>
                            {
                                product.map((item) => {
                                    return (
                                        <Col sm="3" lg="2" key={item._id}>
                                            <ProductItem
                                                product={item}
                                            />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    
                }
            </div>
        </div>
    )
}
