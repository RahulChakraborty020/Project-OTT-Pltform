import react from 'react';
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
import rolando from "../Images/rolando.jpg";
import mesi from "../Images/mesi.jpg";
import virat from "../Images/v.jpg";
import sp1 from "../Images/sp1.webp";
import sp2 from "../Images/sp2.webp";
import sp3 from "../Images/sp3.webp";
import sp4 from "../Images/sp4.webp";
import sp5 from "../Images/sp5.webp";
import sp6 from "../Images/sp6.webp";
import sp7 from "../Images/sp7.webp";
import sp8 from "../Images/sp8.webp";
import sp9 from "../Images/sp9.webp";
import sp10 from "../Images/sp10.webp";
import sp11 from "../Images/sp11.webp";
import sp12 from "../Images/sp12.webp";
import sp13 from "../Images/sp13.webp";
import sp14 from "../Images/sp14.webp";
import sp15 from "../Images/sp15.webp";
import sp16 from "../Images/sp16.webp";


const Sports = ()=>{

    const nav = useNavigate();

    return (
        <>
        <div className='bg-black mt-5 w-100'>
            <Container className='mt-5'>

                <Row className=''>
                    <Col className='col-1 me-5'>
                    </Col>

                    <Col className='col-9 ms-3 mt-4'>
                     <Carousel data-bs-theme="dark" className='w-60 ' >

                    <Carousel.Item >
                    <Link to='/footbal'>
                        <img
                            className="d-block w-100 custom-img custom-hover"
                            src={rolando}
                            alt="First slide"/>
                    </Link>

                        <Carousel.Caption>
                            <h1 className='fw-bold text-warning fs-1 mb-0 '>Cristiano Ronaldo</h1>
                            <h5 className='fw-bold text-light fs-3 mb-3 '>Footbal</h5>

                            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4'  onClick={()=>nav('/footbal')}>
                                <div className='d-flex justify-content-center ps-3 pe-3 pt- pb-2 btn-responsive'>
                                    WATCH NOW
                                </div>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <Link to='/footbal'>
                        <img
                            className="d-block w-100 custom-img custom-hover"
                            src={mesi}
                            alt="First slide"/>
                    </Link>

                        <Carousel.Caption>
                        <h1 className='fw-bold text-warning fs-1 mb-0 '>Lionel Mess</h1>
                            <h5 className='fw-bold text-light fs-3 mb-3 '>GOAT</h5>
                            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4'  onClick={()=>nav('/footbal')} >
                                <div className='d-flex justify-content-center ps-3 pe-3  pb-2 btn-responsive'>
                                    WATCH NOW
                                </div>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                    <Link to='/footbal'>
                          <img 
                            className="d-block w-100 custom-img custom-hover"
                            src={virat}
                            alt="First slide"/>
                    </Link>


                        <Carousel.Caption>

                        <h1 className='fw-bold text-warning fs-1 mb-0'>Virat Kohli</h1>
                            <h5 className='fw-bold text-light fs-3 mb-3 '>World No. one Batsman</h5>

                            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/footbal')}>
                                <div className='d-flex justify-content-center ps-3 pe-3  pb-2 btn-responsive'>
                                    WATCH NOW
                                </div>
                            </Button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </Col>
                </Row>
            </Container>



            <CardBody className='ps-3 mt-4 pb-2 text-nowrap text-white fw-bold fs-3 bg-black '>
                                        Popular Sports
                                </CardBody>

                
                            <Carousel>
                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                            <Link to='/footbal'> <div className="p-0 image-container">    <Image src={sp1} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>    <div className="p-0 image-container">    <Image src={sp2} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp3} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>    <div className="p-0 image-container">    <Image src={sp4} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp5} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'> <div className="p-0 image-container">    <Image src={sp6} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>  <div className="p-0 image-container">    <Image src={sp7} fluid className='custom-width' />  </div></Link>
                            <Link to='/footbal'>           <div className="p-0 image-container">    <Image src={sp8} fluid className='custom-width' />  </div></Link>

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp9} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp10} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp11} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp12} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp13} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp14} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp15} fluid  className='custom-width'/>  </div></Link>
            <Link to='/footbal'>   <div className="p-0 image-container">    <Image src={sp16} fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>
                            </Carousel>

                            <div className='pb-4'>

                            </div>

               
        </div>
        </>
    )
}

export default Sports;