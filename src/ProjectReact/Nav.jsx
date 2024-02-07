import React, { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import "./Extra.css";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from "../ProjectReact/Images/unnamed.png";
import logocartun from "../ProjectReact/Images/logo.svg";




const NavBar = ()=>{

  const nav = useNavigate();
  
  
  

  const [show, setShow] =useState(false);

  const handleshow =()=>{
    setShow(!show)
  };

  

 const location = useLocation();



    return (

        <>    
          <div className='mb-5 w-100'>
          <Navbar  bg='black' expand='md'  className='pe-md-5 pt-3 sticky-top mb-5'>
            
            <Container >
             
                <Navbar.Brand className='text-light fw-bold fs-4 d-flex align-items-center ms-md-0'>
                <Image src={logo} onClick={()=>nav('/')}  className='me-md-1 d-inline-block align-top custom-width-height' />
              
               <Nav.Item onClick={()=>nav('/')}>
                <Nav.Link>
                  JioCinema
                </Nav.Link>
                
                </Nav.Item> 
              </Navbar.Brand>
              
              

              <Navbar.Toggle aria-controls='my-nav' />

              <Navbar.Collapse id='my-nav' >

              <Nav className='me-md-auto fw-bold'>
            <Link to='/subcribe' className='text-decoration-none'> <Nav.Link href='/' className='text-warning fw-bold fs-6 ms-md-2 text-nowrap custom-border ps-md-3 pe-md-3'>Subcribs </Nav.Link> </Link> 
           <Nav.Item onClick={()=>nav('/foryou')}> <Nav.Link  className={`text-light fw-bold fs-6 ms-md-4 text-nowrap ps-md-2 pt-2 pb-md-2 pe-md-2 ${location.pathname === '/foryou' ? 'custom-foryou' : ''} `} >For You </Nav.Link></Nav.Item>    
                <Nav.Item onClick={()=>nav('/sports')}><Nav.Link className= {`text-light fw-bold fs-6 ms-md-4 ps-md-2 pb-md-2 pe-md-2 text-nowrap ${location.pathname === '/sports' ? 'custom-foryou' : ''}`}>sports </Nav.Link></Nav.Item>
                <Nav.Item onClick={()=>nav('/movies')}><Nav.Link  className={`text-light fw-bold fs-6 ms-md-4 text-nowrap ${location.pathname === '/movies' ? 'custom-foryou' : ''} `}>Movies </Nav.Link></Nav.Item>
               <Nav.Item onClick={()=>nav('/tvshow')}> <Nav.Link  className={`text-light fw-bold fs-6 ms-md-4 text-nowrap ${location.pathname === '/tvshow' ? 'custom-foryou' : ''}`}>Tv Shows </Nav.Link></Nav.Item>
                <Nav.Item onClick={()=>nav('/news')}><Nav.Link  className={`text-light fw-bold fs-6 ms-md-4 text-nowrap ${location.pathname === '/news' ? 'custom-foryou' : ''} `}>News</Nav.Link></Nav.Item>
                
              </Nav> 

              

             
            
               <Form className="d-flex  ">
                
                 
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-md-2 bg-black text-light  place-color "
                    aria-label="Search"
                      />


                  <Image src={logocartun} alt="logo"  className='custom-size' onClick={handleshow} />

                 

              
                    
                <Modal show ={show} onHide={handleshow} animation={false} className='mt-5 custom-modal'>
                  
                  
                  <div className='w-75' >

                    <Container className='bg-black modal-content'>

                        
                        <div className='bg-dark mt-4 w-51 mb-4 '>
                          <div className='d-flex justify-content-center mb-1'>
                             <Image src={logocartun} alt="logo" className='custom-size img-fluid'/>
                          </div>

                             <div className='bg-dark d-flex justify-content-center fw-bold text-light fs-4 mb-2'>Guest</div>

                             <div className='d-flex justify-content-center'>

                              <Button onClick={()=>{nav('/logo'); handleshow(false);}}  className='custom-pink-background ps-md-3 pe-md-3 fw-bold text-light mb-3'>Login</Button> 
                             </div>

                           
                        </div><br/><br/>
                            <Card className='bg-black  align-items-start fw-bold text-light fs-6 ps-md-2'>Subsribe Now!</Card> 
                            <hr className='text-light'></hr>
                            <Card className='bg-black  align-items-start fw-bold text-light fs-6 ps-md-2 mb-5'>Help & Legal</Card>
                           
                          <Link >
                          <Card className='pink-text bg-black  align-items-start fw-bold text-lightps-2 mt-5'><span className='pink-text'>privacy and T&C
                            </span></Card>
                          </Link>

                          <Card className='text-small bg-black text-light mb-3'>
                          3.11.03.0-add99020 - 6c2dd7ba-d47e-4518-bcff-fb0ef0fc242f
                          </Card>
                            
                      </Container>
                  </div>  
                      </Modal>

                </Form>

              </Navbar.Collapse>
              

            </Container>

          </Navbar> </div>
          

        </>
    )
}
export default NavBar;