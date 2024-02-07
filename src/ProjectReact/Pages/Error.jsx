import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Error =()=>{
    return(

        <>
        <div className='bg-black w-100'>
            <Container>

                <Row className='mt-5 mb-5'>
                    <Col></Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col></Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col></Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col></Col>
                </Row>


                <Row className='mt-5'>
                    <Col className='col-4'></Col>
                    <Col className='col-6 text-light fs-3 fw-bold'>
                    Something went wrong!
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='col-4'></Col>
                    <Col className='col-6 text-light fs-6 fw-bold'>
                    Internal server error, please try again later.
                    </Col>
                </Row>

                <Row className='mt-5 pb-5'>
                <Col className='col-5'></Col>
                    <Col className='col-6 ps-md-4'>
                   <Link to='/' className='custom-go fw-bold'>Go To Home</Link>
                    </Col>
                </Row>

            </Container>
        </div>
        </>
    )
}
export default Error;