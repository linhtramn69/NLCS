import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, NavDropdown, NavItem, FormGroup, FormControl, Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Index() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3032/api/v1/sanpham").then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, [])


    return (
        <main>
            <div className="">
                {/* <!-- BANNER --> */}
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <img src="images/banners/home.png" alt="" className="img-fluid w-100" />
                        </div>
                    </div>

                </section>

                {/* <!-- SERVICE -->*/}
                <section className="option">
                    <div className="container">
                        <div className="row row-cols-3 py-2 pt-3 text-center">
                            <div className="col">
                                <h6><i className="fas fa-dolly me-2"></i>FREESHIP</h6>
                            </div>
                            <div className="col">
                                <h6><i className="fas fa-box-open me-2"></i>HOÀN TRẢ MIỄN PHÍ</h6>
                            </div>
                            <div className="col">
                                <h6><i className="fas fa-hand-holding-heart me-2"></i>BẢO HÀNH VĨNH VIỄN</h6>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<!-- PRODUCTS --> */}
                <section>
                    <div className="container">
                        <div className="option-product d-block text-center py-5 ">
                            <a href="#"><button className="me-5 mb-lg-0 mb-3">DÂY CHUYỀN</button></a>
                            <a href="#"><button className="me-5">NHẪN</button></a>
                            <a href="#"><button className="me-5">LẮC TAY</button></a>
                            <a href="#"><button className="me-5">KHUYÊN TAI</button></a>
                        </div>
                        <h4 className="option-title">MÓN QUÀ TRI ÂN</h4>
                        <Row className="product-home mt-5">
                            {products.map((product) => (
                                <Col lg={3} md={6}>
                                    <Card>
                                        <div className='image-product text-center'>
                                        <Card.Img
                                            src={"images/" + product.hinh_anh}
                                            className="rounded-0 mx-auto"
                                        />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="name-product">{product.ten_sp}</Card.Title>

                                            <Card.Subtitle className="mb-2 text-text-muted">
                                                <FontAwesomeIcon icon={faStar} color="#29689b " />
                                                <FontAwesomeIcon icon={faStar} color="#29689b " />
                                                <FontAwesomeIcon icon={faStar} color="#29689b " />
                                                <FontAwesomeIcon icon={faStar} color="#29689b " />
                                                <FontAwesomeIcon icon={faStar} color="#29689b " />
                                                <p className="price mt-2 mb-1">{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(product.gia_tien)}</p>
                                            </Card.Subtitle>

                                            <Button className="btn btn-add" >
                                                <FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ hàng
                                            </Button>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>

                {/*<!-- COLLECTION --> */}
                <section className="bst-home pb-4">
                    <div className="container">
                        <div className="row">
                            <img src="images/banners/hinh3.PNG" className="img-fluid w-100" alt="..." />
                        </div>
                        <div className="row row-cols-lg-3 row-cols-1 mt-3">
                            <div className="col">
                                <div className="card border-0">
                                    <img src="images/banners/banner3-1.png" className="card-img" alt="" />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-center">BỘ SƯU TẬP ELAN</h5>
                                        <button>KHÁM PHÁ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src="images/banners/banner4-1.png" className="card-img" alt="" />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-center">BỘ SƯU TẬP ASPIRATION</h5>
                                        <button>KHÁM PHÁ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src="images/banners/banner5-1.png" className="card-img" alt="" />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-center">BỘ SƯU TẬP EMALIE</h5>
                                        <button>KHÁM PHÁ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Index
