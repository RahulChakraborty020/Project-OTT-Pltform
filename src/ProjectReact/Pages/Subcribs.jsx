import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CardLink } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Css.css"


const Subcribe = ()=>{

    const nav = useNavigate();

    return(
        <>
        <div className="bg-black mt-5 w-100">

        <h1 className="fw-bold text-light pt-5 justify-content-center text-center ">JioCinema Premium</h1>

        <h5 className="text-light pt-4 text-center" >Welcome to the new home of all your favourite Hollywode content.</h5>

        <Container>
            <Row>
                <Col className="col-3"></Col>
                <Col className="col-5 ms-5 mt-5 w-5">
                 <div className="custom-div" >
                    <h4 className="text-light pt-2 fw-bold ps-3"> Best of Hollywood</h4>

                    <ul className="text-light pt-4">
                        <li>
                            Watch on any device
                        </li>

                        <li>
                            Highest video & audio quality
                        </li>

                        <li>
                            Upto 4 devices simultaneously
                        </li>
                    </ul>
                    
                    <Container className="color-custom">

                        <Row>
                            <Col className="col-3 pt-4 pb-3">
                                 <button className="custom-subcribe text-nowrap" >12 Months</button>
                                 </Col>
                                 <Col className="col-"></Col>
                                 
                                 <Col className="col-3">
                    <span className="text-light fw-bold fs-1 " >&#x20B9;999</span>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>

        <p className="text-light text-center pt-4">By continuting you agree to our <span className="text-primary">Terms of Use </span> and acknowledge that you have read our <span className="text-primary"> privacy policy.</span></p>

            <Container>

                 <Row className="pt-4">
                    <Col className="col-4"></Col>
                    
                    <Col className="col-2 ps-1 pt-2">
                        <Link className="text-light text-decoration-underline">Apply Promo Code</Link>
                    </Col>

                    <Col className="col-2 pe-5">
                    <p ><button className="fw-bold text-light p-2 custom-button">Continue and pay &#x20B9;999</button></p>
                    </Col>
                </Row>
            </Container>
               
                <p className="text-light pt-3 text-center " >Already Subscribed? <span><Link className="text-light ps-2 text-decoration-underline">Login Here</Link></span></p>

                <Row>
                    <Col className="col-5">
                    </Col>
                    <Col className="col-4 ms-5">
                       <button className="text-light fw-bold mt-4 mb-4 custom-butt" onClick={() => nav('/')}>Go TO Home</button>
                    </Col>
                </Row>
             

       

        </div>
        </>
    )
}

export default Subcribe;