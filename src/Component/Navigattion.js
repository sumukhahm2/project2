import React,{Fragment} from 'react'
import { Container,Button, Navbar,Nav } from 'react-bootstrap'
import './Navigation.css'
const Navigation=()=>{
    return(
        <Container fluid >
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <a className='button' href='/'>Cart
            <span>0</span>
           </a>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    );
    
}

export default Navigation