import React from 'react'
import sou from "../Video/south.mp4"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


  const WestSouth = ()=>{
    return(
        <>
        <div className='bg-black w-100'>

            <Container className='mt-5'>
                <Row className='pt-2'>
                    <Col></Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='col-2'></Col>
                    <Col className='col-8'>
                    <video controls width='100%'>
                    <source src={sou} type='video/mp4' className='' />
                </video>
                    </Col>
                </Row>

                <Row className='pt-5'>
                    <Col></Col>
                </Row>
                
            </Container>
        </div>
        </>
    )
  } 

  export default WestSouth;