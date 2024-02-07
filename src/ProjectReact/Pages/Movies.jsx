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
import south1 from "../Images/so.jpg";
import south2 from "../Images/saa.webp";
import south3 from "../Images/saaa.jpeg";
import bm1 from "../Images/bm1.jpg";
import bm2 from "../Images/bm2.webp";
import bm3 from "../Images/bm3.webp";
import bm4 from "../Images/bm4.webp";
import bm5 from "../Images/bm5.webp";
import bm6 from "../Images/bm6.webp";
import bm7 from "../Images/bm7.webp";
import bm8 from "../Images/bm8.webp";
import bm9 from "../Images/bm9.webp";
import bm10 from "../Images/bm10.webp";
import bm11 from "../Images/bm11.webp";
import bm12 from "../Images/bm12.webp";
import bm13 from "../Images/bm13.webp";
import bm14 from "../Images/bm14.jpg";
import bm15 from "../Images/bm15.webp";
import bm16 from "../Images/bm16.webp";


const Movies = ()=>{

    const nav = useNavigate(); 

    return (
        <>
        <div className='bg-black mt-5 w-100'>

        <Container >

<Row className=''>
    <Col className='col-1 me-5'>
    </Col>

    <Col className='col-9 ms-3 mt-3'>
     <Carousel data-bs-theme="dark" className='w-60 ' >

    <Carousel.Item >

    <Link to='/south'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={south1}
            alt="First slide"/>
    </Link>

        <Carousel.Caption>
            <h1 className='fw-bold text-warning fs-1 mb-3 '>Block Buster</h1>
           

            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/south')} >
                <div className='d-flex justify-content-center ps-3 pe-3 pt- pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>

    <Link to='/south'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={south2}
            alt="First slide"/>
        </Link>

        <Carousel.Caption>
        <h1 className='fw-bold text-warning fs-1 mb-3 '>Block Buster</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/south')} >
                <div className='d-flex justify-content-center ps-3 pe-3  pb-2 btn-responsive'>
                    WATCH NOW
                </div>
            </Button>
        </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>

    <Link to='/south'>
        <img
            className="d-block w-100 custom-img custom-hover"
            src={south3}
            alt="First slide"/>
            </Link>

        <Carousel.Caption>

        <h1 className='fw-bold text-warning fs-1 mb-3 '>Block Buster</h1>
            <Button variant="outline-danger" className='co-but fw-bold fs-2 btn-responsive mb-4' onClick={()=>nav('/south')}>
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

                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm1} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm2} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm3} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm4} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm5} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm6} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm7} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm8} fluid className='custom-width' />  </div></Link>

                        </Stack>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Stack direction="horizontal" gap={3} className='d-flex gap-1 ps-2'>


                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm9} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm10} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm11} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm12} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm13} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm14} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm15} fluid className='custom-width' />  </div></Link>
                            <Link to='/south'><div className="p-0 image-container">    <Image src={bm16} fluid className='custom-width' />  </div></Link>

                        </Stack>
                    </Carousel.Item>
                </Carousel>

                            <div className='pb-4'>

                            </div>


       
        </div>
        </>
    )
}

export default Movies;