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
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as Yup from 'yup';



const Logo = ()=>{

    return (
        <>
            <div className='bg-black text-light pb-5 w-100'>

                <Row className='pt-5 pb-5'>

                </Row>
                <Row>

                    <div className='d-flex gap-2'>
                        <div className='col-4 ms-5'>

                        </div>

                        <div>
                            <i className="bi bi-arrow-left-short fs-1 mb-3"></i>

                        </div>

                        <div className='mt-2 fs-4 fw-bold'>
                            <p>Login to Continue</p>
                        </div>

                    </div>
                </Row>

                <Row>

                    <Col className='col-3 ms-md-5 me-md-5'></Col>

                    <Col className='col-7 pt-2 fs-7 ms-md-5'>
                        <input type='tel' placeholder='+91 &nbsp; Your mobile number' className='bg-black border-bottom pe-md-5 ms-md-4 ' />
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col className='col-md-4 me-md-3'>
                    </Col>

                    <Col className='col-md-4 ms-md-5'>
                        <Button className='custom-color'>Continue</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className='col-md-4'></Col>

                    <Col className='col-md-4'>
                    <p className="text-light text-center pt-4">By continuing you agree to our  <span className=""><Link className='text-decoration-none '>Terms of Use </Link></span> and acknowledge that you have read our <span className=""> <Link className='text-decoration-none'>privacy policy.</Link> </span></p>
                    </Col>
                </Row>




            </div>
        </>
    )
}

export default Logo;


