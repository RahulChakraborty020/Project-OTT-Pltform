import React, { useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Extra.css";
import { CardBody, CardHeader, CarouselCaption } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import appleStore from "../ProjectReact/Images/appleStore.svg";
import google from "../ProjectReact/Images/google.svg";
import jiologo from "../ProjectReact/Images/jio-logo.png"


const Footer = () => {


    return (

        <>

            <Container fluid className='custom-background text-light w-100 '>



                


                    <Row className='d-flex text-light ps-md-2 pt-5 text-nowrap gap-1 row ' style={{ marginBottom: '0' }}>
                        <Col className='col-md-1 me-md-5'>
                            <h3 className='fw-bold fs-4 '  >JioCinema</h3>
                        </Col>

                        <Col className='col-md-4 me-md-4'>
                            <h3 className='fw-bold fs-4'>Support</h3>
                        </Col>

                        <Col className='col-md-3 ms-md-3' >
                            <h3 className='fw-bold fs-2'>Connect With Us</h3>
                        </Col>

                        <Col className='col-md-3'>
                            <h3 className=' fw-bold fs-2'>Download the App</h3>
                        </Col>


                    </Row>



                    <Row className='d-flex gap-1 ps-md-2 row mt-0 '>

                        <Col className='col-md-6 me-md-4'></Col>


                        <Col className='col-md-3'>
                            <Link  to='null' className=' d-flex gap-4'>
                                <FontAwesomeIcon icon={faFacebook} className='text-light fs-2' />
                                <FontAwesomeIcon icon={faTwitter} className='text-light fs-2' />
                                <FontAwesomeIcon icon={faInstagram} className='text-light fs-2' />

                            </Link>
                        </Col>


                        <Col className='col-md-2'>

                            <Stack direction="horizontal" gap={2} className='d-flex gap-0 ps- '>

                                <div className="p-0"> <Link  to='null'>   <Image src={google} fluid className='custom-downodlogo ' /> </Link>   </div>
                                <div className="p-0"> <Link  to='null'>    <Image src={appleStore} fluid className='custom-downodlogo' /> </Link> </div>

                            </Stack>
                        </Col>


                    </Row>


                    <Row className='custom-row'>
                        <Col className='col-md-1 me-md-5'>
                            <Link  to='null' className='text-decoration-none' >
                                <h4 className='text-light fs-6 fw-bold text-nowrap ps-md-4 '>
                                    For You
                                </h4>
                            </Link>
                        </Col>

                        <Col className='col-md-4 ms-md-2'>
                            <Link  to='null' className='text-decoration-none'>
                                <h4 className='text-light fs-6 fw-bold text-nowrap '>
                                    Help Center
                                </h4>
                            </Link>
                        </Col>
                    </Row>



                    <Row className=''>
                        <Col className='col-md-1 me-md-5'>
                            <Link  to='null' className='text-decoration-none' >
                                <h4 className='text-light fs-6 fw-bold text-nowrap ps-md-4 '>
                                    Sports
                                </h4>
                            </Link>
                        </Col>

                        <Col className='col-md-4 ms-md-2'>
                            <Link  to='null' className='text-decoration-none'>
                                <h4 className='text-light fs-6 fw-bold text-nowrap '>
                                    Terms Of Use
                                </h4>
                            </Link>
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col className='col-md-1 me-md-5'>
                            <Link to='null' className='text-decoration-none' >
                                <h4 className='text-light fs-6 fw-bold text-nowrap ps-md-4 '>
                                    Movies
                                </h4>
                            </Link>
                        </Col>

                        <Col className='col-md-4 ms-md-2'>
                            <Link  to='null' className='text-decoration-none'>
                                <h4 className='text-light fs-6 fw-bold text-nowrap '>
                                    Privacy Policy
                                </h4>
                            </Link>
                        </Col>
                    </Row>


                    <Row className=''>
                        <Col className='col-md-1 me-md-4'>
                            <Link  to='null' className='text-decoration-none' >
                                <h4 className='text-light fs-6 fw-bold text-nowrap ps-md-4 '>
                                    Tv Shows
                                </h4>
                            </Link>
                        </Col>

                        <Col className='col-md-5 ms-md-4 '>
                            <Link  to='null' className='text-decoration-none'>
                                <h4 className='text-light fs-6 fw-bold text-nowrap '>
                                    Content Complaints
                                </h4>
                            </Link>
                        </Col>
                    </Row>


               


            </Container>

            <Container fluid className='bg-dark text-light '>
                <Row className=' d-flex  gap-1 row '>
                    <Col className=' col-md-6 small me-4  ps-4 pt-4 pb-3' >
                        Copyright © 2023 Viacom18 Media PVT LTD.All rights reserved.
                    </Col>

                    <Col className='col-3 me-5 ms-5'></Col>

                    <Col className='col-12 col-md-1 col-lg-1 ms-5 pt-3 pb-3'>
                        <Image src={jiologo} fluid className='custom-wi ms-5' />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Footer;