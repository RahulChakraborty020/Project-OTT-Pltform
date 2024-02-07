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
import tvv1 from "../Images/shh.webp";
import tvv2 from "../Images/shhh.jpg";
import tvv3 from "../Images/shhhh.webp";
import tv1 from "../Images/tv1.webp";
import tv2 from "../Images/tv2.webp";
import tv3 from "../Images/tv3.webp";
import tv4 from "../Images/tv4.webp";
import tv5 from "../Images/tv5.webp";
import tv6 from "../Images/tv6.webp";
import tv7 from "../Images/tv7.webp";
import tv8 from "../Images/tv8.webp";
import tv9 from "../Images/tv9.webp";
import tv10 from "../Images/tv10.webp";
import tv11 from "../Images/tv11.webp";
import tv12 from "../Images/tv12.webp";
import tv13 from "../Images/tv13.webp";
import tv14 from "../Images/tv14.webp";
import tv15 from "../Images/tv15.webp";
import tv16 from "../Images/tv16.webp";

const TvShow = ()=>{

    const nav = useNavigate();

    return (
        <>
        <div className='bg-black w-100'>

        <Container >

<Row className=''>
    <Col className='col-1 me-5'>
    </Col>

    <Col className='col-9 ms-3 mt-3'>
     <Carousel data-bs-theme="dark" className='w-60 ' >

    <Carousel.Item >

    <Link to='/serial'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={tvv1}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>
            <h1 className='fw-bold text-warning fs-1 mb-3 '>Ramayan</h1>
           

            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/serial')}>
                <div className='d-flex justify-content-center ps-3 pe-3 pt- pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>

    <Link to='/serial'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={tvv2}
            alt="First slide"/>
        </Link>

        <Carousel.Caption>
        <h1 className='fw-bold text-warning fs-1 mb-3 '>Indian Idol</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/serial')} >
                <div className='d-flex justify-content-center ps-3 pe-3  pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>

    <Link to='/serial'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={tvv3}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>

        <h1 className='fw-bold text-warning fs-1 mb-3 '>Shark Tank</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/serial')}>
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
                                        Block Buster Movies
                                </CardBody>

                
                <Carousel>
                    <Carousel.Item>
                        <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv1} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv2} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv3} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv4} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv5} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv6} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv7} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv8} fluid className='custom-width' />  </div></Link>

                        </Stack>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>


                            <Link to='/serial'><div className="p-0 image-container">    <Image src={tv9} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv10} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv11} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv12} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv13} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv14} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv15} fluid className='custom-width' />  </div></Link>
                            <Link to='/serial'> <div className="p-0 image-container">    <Image src={tv16} fluid className='custom-width' />  </div></Link>

                        </Stack>
                    </Carousel.Item>
                </Carousel>

                            <div className='pb-4'>

                            </div>

        
        </div>
        </>
    )
}

export default TvShow;