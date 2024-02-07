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
import ne from "../Images/ne.jpg";
import nee from "../Images/nee.png";
import neee from "../Images/neee.jpeg";
import nw1 from "../Images/nw1.webp";
import nw2 from "../Images/nw2.webp";
import nw3 from "../Images/nw3.webp";
import nw4 from "../Images/nw4.webp";
import nw5 from "../Images/nw5.webp";
import nw6 from "../Images/nw6.webp";
import nw7 from "../Images/nw7.webp";
import nw8 from "../Images/nw8.webp";
import nw9 from "../Images/nw9.webp";
import nw10 from "../Images/nw10.webp";
import nw11 from "../Images/nw11.webp";
import nw12 from "../Images/nw12.webp";
import nw13 from "../Images/nw13.webp";
import nw14 from "../Images/nw14.webp";
import nw15 from "../Images/nw15.jpeg";
import nw16 from "../Images/nw16.webp";


const News = ()=>{

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

    <Link to='/kho'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={ne}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>
            <h1 className='fw-bold text-warning fs-1 mb-3 '>Indain News</h1>
           

            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav ('/kho')} >
                <div className='d-flex justify-content-center ps-3 pe-3 pt- pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>

    <Link to='/kho'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={nee}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>
        <h1 className='fw-bold text-warning fs-1 mb-3 '>News Today</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav ('/kho')} >
                <div className='d-flex justify-content-center ps-3 pe-3  pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>

    <Link to='/kho'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={neee}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>

        <h1 className='fw-bold text-warning fs-1 mb-3 '>News</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav ('/kho')}>
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

                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw1}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw2}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw3}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw4}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw5}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw6}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw7}fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw8}fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>

                        
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw9} fluid  className='custom-width'/>  </div></Link>
                        <Link to='/kho'><div className="p-0 image-container">    <Image src={nw10} fluid  className='custom-width'/>  </div></Link>
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw11} fluid  className='custom-width'/>  </div></Link>
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw12} fluid  className='custom-width'/>  </div></Link>
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw13} fluid  className='custom-width'/>  </div></Link>
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw14} fluid  className='custom-width'/>  </div></Link>
                       <Link to='/kho'> <div className="p-0 image-container">    <Image src={nw15} fluid  className='custom-width'/>  </div></Link>
                      <Link to='/kho'>  <div className="p-0 image-container">    <Image src={nw16} fluid  className='custom-width'/>  </div></Link>

                    </Stack>
                                </Carousel.Item>
                            </Carousel>

                            <div className='pb-4'>

                            </div>

        
        </div>
        </>
    )
}

export default News;