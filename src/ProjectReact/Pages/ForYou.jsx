import React from "react";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardBody, CardHeader, CarouselCaption } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import thumbla from "../Images/kid.webp";
import k1 from "../Images/k1.webp";
import k2 from "../Images/k2.webp";
import k3 from "../Images/k3.webp";
import k4 from "../Images/k4.webp";
import k5 from "../Images/k5.webp";
import k6 from "../Images/k6.webp";
import k7 from "../Images/k7.webp";
import k8 from "../Images/k8.jpg";
import k9 from "../Images/k9.webp";
import k10 from "../Images/k10.webp";
import k17 from "../Images/k17.webp";
import k12 from "../Images/k12.webp";
import k13 from "../Images/k13.webp";
import k14 from "../Images/k14.webp";
import k15 from "../Images/k15.webp";
import k16 from "../Images/k16.webp";
import video1 from "../Video/motupatlu.mp4"

const ForYou = () =>{

    return (

        <>
       <div className="bg-black mt-5 w-100">

       <Container fluid className='text-light bg-black mt-5'>
                    <Row className='pt-4'>
                        
                        <Col className="col-12 ">
                            <Link to='/motu'>
                                <img
                                    className="d-block w-100 custom-imgk custom-hover"
                                    src={thumbla}
                                    alt="First slide"
                                />
                            </Link> 
                        </Col> 
                        
                        </Row>


                </Container>

                        <CardBody className='ps-md-3 pt-3 pb-2 text-nowrap text-white fw-bold fs-3 bg-black'>
                                        Kids Show
                                </CardBody>

                
                            <Carousel>
                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

              <Link to='/motu'> <div className="p-0  image-container ">    <Image src={k1} fluid  className='custom-width '/>  </div> </Link>
                         <Link to='/motu'> <div className="p-0 image-container">       <Image src={k2} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k3} fluid  className='custom-width '/>  </div> </Link>
                         <Link to='/motu'> <div className="p-0  image-container">    <Image src={k4} fluid  className='custom-width'/>  </div> </Link>
                         <Link to='/motu'> <div className="p-0  image-container">    <Image src={k5} fluid  className='custom-width'/>  </div> </Link>
                         <Link to='/motu'> <div className="p-0  image-container">    <Image src={k6} fluid  className='custom-width'/>  </div> </Link>
                         <Link to='/motu'> <div className="p-0  image-container">    <Image src={k7} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k8} fluid  className='custom-width'/>  </div> </Link>

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k9} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k10} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k17} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k12} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k13} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k14} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k15} fluid  className='custom-width'/>  </div> </Link>
                        <Link to='/motu'>  <div className="p-0  image-container">    <Image src={k16} fluid  className='custom-width'/>  </div> </Link>

                    </Stack>
                                </Carousel.Item>
                            </Carousel>

                            



                      
                   

        
       </div>
        </>
    )
}

export default ForYou;