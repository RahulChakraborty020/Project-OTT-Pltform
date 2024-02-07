import React, { useRef, useState } from 'react' 
import Carousel from 'react-bootstrap/Carousel';
import "./Css.css"
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
import virat from "../Images/vi.jpg";
import Yuvi from "../Images/yp.jpg";
import yu from "../Images/yup.jpg";
import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";
import img5 from "../Images/img5.webp";
import img6 from "../Images/img6.webp";
import img7 from "../Images/img7.webp";
import img8 from "../Images/img8.webp";
import img9 from "../Images/img9.webp";
import img10 from "../Images/img10.webp";
import img11 from "../Images/img11.webp";
import img12 from "../Images/img12.webp";
import img13 from "../Images/img13.webp";
import img14 from "../Images/img14.webp";
import img15 from "../Images/img15.webp";
import img16 from "../Images/img16.webp";
import mov1 from "../Images/mov1.avif";
import mov2 from "../Images/mov2.webp";
import mov3 from "../Images/mov3.webp";
import mov4 from "../Images/mov4.webp";
import mov5 from "../Images/mov5.webp";
import mov6 from "../Images/mov6.webp";
import mov7 from "../Images/mov7.webp";
import mov8 from "../Images/mov8.webp";
import mov9 from "../Images/mov9.webp";
import mov10 from "../Images/mov10.webp";
import mov11 from "../Images/mov11.webp";
import mov12 from "../Images/mov12.webp";
import mov13 from "../Images/mov13.webp";
import mov14 from "../Images/mov14.webp";
import mov15 from "../Images/mov15.webp";
import mov16 from "../Images/mov16.webp";
import sou1 from "../Images/sou1.webp";
import sou2 from "../Images/sou2.webp";
import sou3 from "../Images/sou3.avif";
import sou4 from "../Images/sou4.webp";
import sou5 from "../Images/sou5.webp";
import sou6 from "../Images/sou6.webp";
import sou7 from "../Images/sou7.avif";
import sou8 from "../Images/sou8.webp";
import sou9 from "../Images/sou9.webp";
import sou10 from "../Images/sou10.webp";
import sou11 from "../Images/sou11.webp";
import sou12 from "../Images/sou12.webp";
import sou13 from "../Images/sou13.webp";
import sou14 from "../Images/sou14.webp";
import sou15 from "../Images/sp15.webp";
import sou16 from "../Images/sou16.avif";





const Home =()=>{

    const nav =useNavigate();


    
    return (

        <>
         <div className='bg-black mt-5 w-100' >

                <Container fluid className='text-light bg-black'>
                    <Row className='pt-5'>
                        <Col className='col-md-1'></Col>

                        <Col className=' col-md-3 mt-5 text-nowrap bg-black pe-mb-5'>
                            <h1 className='text-light fw-bold fs-1 custom-p'> Virat Kohli </h1>

                            <Button variant="outline-danger" className='co-text text-light fw-bold fs-4 ms-md-5'onClick={()=>nav('/king')} >
                                <div className='d-flex justify-content-center btn-responsive '>
                                    WATCH
                                </div>
                            </Button>
                        </Col>

                        <Col className='bg-black col-8 ps-5'>
                            <Carousel data-bs-theme="dark" className='w-100 ' >

                                <Carousel.Item >
                            
                                <Link to='/king'>
                                    <img
                                        className="d-block w-100 custom-img custom-hover"
                                        src={virat}
                                        alt="First slide"/>
                                        </Link>

                                    <Carousel.Caption>
                                        <h1 className='fw-bold text-warning fs-1 text-nowrap '>King Kohli</h1>

                                        <Button variant="outline-danger" className='co-but fw-bold fs-2 ' onClick={()=>nav('/king')}>
                                            <div className='d-flex justify-content-center ps-md-3 pe-md-3 custom-bnt'>
                                                WATCH NOW
                                            </div>
                                        </Button>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>

                                <Link to='/yvi'>
                                    <img
                                        className="d-block w-100 custom-img custom-hover"
                                        src={Yuvi}
                                        alt="First slide"/>
                                        </Link>

                                    <Carousel.Caption>
                                        <h1 className='fw-bold text-warning fs-1 text-nowrap mb-0'>YUVI</h1>
                                        <Button variant="outline-danger" className='co-but fw-bold fs-2 ' onClick={()=>nav('/yvi')} >
                                            <div className='d-flex justify-content-center ps-md-3 pe-md-3  custom-bnt'>
                                                WATCH NOW
                                            </div>
                                        </Button>
                                    </Carousel.Caption>
                                </Carousel.Item>


                                <Carousel.Item>

                                    <Link to='/king'>
                                    <img
                                        className="d-block w-100 custom-img custom-hover"
                                        src={yu}
                                        alt="First slide"/>
                                        </Link>

                                    <Carousel.Caption>
                                        <h1 className='fw-bold text-warning fs-1 mb-0'>YUVI-12</h1>
                                        <Button variant="outline-danger" className='co-but fw-bold fs-2 ' onClick={()=>nav('/king')}>
                                            <div className='d-flex justify-content-center ps-md-3 pe-md-3 custom-bnt '>
                                                WATCH NOW
                                            </div>
                                        </Button>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>

                        </Col>
                    </Row>


                </Container>

                        
             
                           
                                <CardBody className='ps-3 pt-2 pb-2 text-nowrap text-white fw-bold fs-3 bg-black'>
                                        Top Sport Picks
                                </CardBody>

                
                            <Carousel>
                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img1} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img2} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img3} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img4} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img5} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img6} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img7} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img8} fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img9} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img10} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img11} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img12} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img13} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img14} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img15} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/topsport'> <div className="p-0 image-container">    <Image src={img16} fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>
                            </Carousel>



                            <CardBody className='ps-3 pt-4 pb-2 text-nowrap text-white fw-bold fs-3 bg-black'>
                                       Blockbuster Movies
                                </CardBody>

                                
                            <Carousel className='pb-3'>
                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov1} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov2} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov3} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov4} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov5} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov6} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov7} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov8} fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov9}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov10}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov11}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov12}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov13}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov14}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov15}  fluid  className='custom-width'/>  </div></Link>
                        <Link to='/boly'><div className="p-0 image-container">    <Image src={mov16}  fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>
                            </Carousel>


                            <Form.Text className='ps-3 pt-4 pb-2 text-nowrap text-white fw-bold fs-3 bg-black'>
                            South Hits in Hindi
                                </Form.Text>

                                
                            <Carousel className='pb-5'>
                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou1}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou2}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou3}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou4}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou5}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou6}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou7}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou8}fluid  className='custom-width'/>  </div></Link> 

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
                      <Link to='/sou'> <div className="p-0 image-container">    <Image src={sou9}fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou10} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou11} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou12} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou13} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou14} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou15} fluid  className='custom-width'/>  </div></Link> 
                       <Link to='/sou'><div className="p-0 image-container">    <Image src={sou16} fluid  className='custom-width'/>  </div></Link> 

                    </Stack>
                                </Carousel.Item>
                            </Carousel>
                                
             
                                </div>

                                
        </>
    )
}
export default Home;




  


