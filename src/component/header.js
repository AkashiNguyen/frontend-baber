import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar} from 'react-bootstrap'
import '../srccss/header.css'
import logo from '../assets/logo.webp'
export default function header() {
  return (
    
    <div>
    <Navbar bg="dark" variant ="dark"
    sticky="top" expand="lg">
    <Navbar.Brand>
    
    <img src={logo} alt={logo} className='logo' />
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse >
    <Nav className='ms-auto nav'>
    <Nav.Link href="#" className='iterm'>Lifestyle</Nav.Link>
    <Nav.Link href="#" className='iterm'>Product</Nav.Link>
    <Nav.Link href="#" className='iterm'>Booking</Nav.Link>
    <Nav.Link href="#" className='iterm'>Store</Nav.Link>

    </Nav>
    <Nav className='ms-auto'>
    <button type="button" className="btn btn-ENG">ENG</button>
    <button type="button" className="btn btn-VN">VN</button>
    </Nav>
   </Navbar.Collapse>
   
    </Navbar>
    </div>
    
    
  

  )
}
