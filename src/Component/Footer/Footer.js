import React from 'react';
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {

    return (
        <footer>
            <Container>

            <Row className="p-5">
                <Col lg={3} sm={6} className="nav flex-column">
                    <h6>DUENDE</h6>
                    <Link to="/">DÂY CHUYỀN</Link>
                    <Link to="/">NHẪN</Link>
                    <Link to="/">LẮC TAY</Link>
                    <Link to="/">KHUYÊN TAI</Link>
                </Col>
                <Col lg={3} sm={6} className="nav flex-column">
                    <h6>BỘ SƯU TẬP</h6>
                    <Link to="/">ELAN COLLECTION</Link>
                    <Link to="/">ASPIRATION COLLECTION</Link>
                    <Link to="/">ELEVATION COLLECTION</Link>
                    <Link to="/">EMALIE COLLECTION</Link>
                </Col>
                <Col lg={3} sm={6} className="nav flex-column">
                    <h6>KÊNH CHÍNH THỨC</h6>
                    <Link to="/"><FontAwesomeIcon icon={faFacebookF}/> FACEBOOK</Link>
                    <Link to="/"><FontAwesomeIcon icon={faInstagram}/> INSTAGRAM</Link>
                    <Link to="/"><FontAwesomeIcon icon={faTwitter}/> TWITTER</Link>
                    <Link to="/"><FontAwesomeIcon icon={faYoutube}/> YOUTUBE</Link>
                </Col>
                <Col lg={3} sm={6} className="nav flex-column">
                    <h6>THÔNG TIN PHÁP LÝ</h6>
                    <Link to="/">ĐIỀU KHOẢN SỬ DỤNG</Link>
                    <Link to="/">THÔNG TIN BẢO MẬT</Link>
                    <Link to="/">COOKIE</Link>
                </Col>
            </Row>
            {/* <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 p-5">
                <div className="col">
                    <h6>DUENDE</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className=""></a></li>
                        <li className="nav-item mb-2"><a href="#" className=""></a></li>
                        <li className="nav-item mb-2"><a href="#" className=""></a></li>
                        <li className="nav-item mb-2"><a href="#" className=""></a></li>
                    </ul>
                </div>
                <div className="col">
                    <h6>BỘ SƯU TẬP</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="">ELAN COLLECTION</a></li>
                        <li className="nav-item mb-2"><a href="#" className="">ASPIRATION COLLECTION</a></li>
                        <li className="nav-item mb-2"><a href="#" className="">ELEVATION COLLECTION</a></li>
                        <li className="nav-item mb-2"><a href="#" className="">EMALIE COLLECTION</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h6>KÊNH CHÍNH THỨC</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className=""><i
                                    className="fa-brands fa-facebook-f me-2"></i>FACEBOOK</a></li>
                        <li className="nav-item mb-2"><a href="#" className=""><i
                                    className="fa-brands fa-instagram me-2"></i>INSTAGRAM</a></li>
                        <li className="nav-item mb-2"><a href="#" className=""><i
                                    className="fa-brands fa-twitter me-2"></i>TWITTER</a></li>
                        <li className="nav-item mb-2"><a href="#" className=""><i
                                    className="fa-brands fa-youtube me-2"></i>YOUTUBE</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h6>THÔNG TIN PHÁP LÝ</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="">ĐIỀU KHOẢN SỬ DỤNG</a></li>
                        <li className="nav-item mb-2"><a href="#" className="">THÔNG TIN BẢO MẬT</a></li>
                        <li className="nav-item mb-2"><a href="#" className="">COOKIE</a></li>
                    </ul>
                </div>
            </div> */}
            </Container>
    </footer>
    )
}
export default Footer
