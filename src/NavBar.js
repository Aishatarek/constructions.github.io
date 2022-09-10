import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillPhone } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { ImLinkedin2 } from "react-icons/im"
import { Link, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
function NavBar() {
  const [closee, setClosee] = useState(false);
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar expanded={closee} key={expand} bg="dark" variant="dark" expand={expand} >
          <Container fluid>
            <NavLink to="/"><img src="images/mail.png" alt="" /></NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setClosee(true)} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={() => setClosee(false)}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <NavLink to="/" className="offcanlink" onClick={() => setClosee(false)}>
                    Dair <span>Group</span>
                  </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navgroup align-items-center w-100 justify-content-between w-100">
                  <NavLink to="/" onClick={() => setClosee(false)}> Home</NavLink>
                  <div className="dropdownn">
                    <NavLink className="dropdownitem" to="/About" onClick={() => setClosee(false)}>
                      About Us
                    </NavLink>
                    <div className="dropdownlist">
                      <HashLink to="/About#mission" onClick={() => setClosee(false)}>Our Mission</HashLink>
                      <HashLink to="/About#staff" onClick={() => setClosee(false)}>Our Staff</HashLink>
                    </div>
                  </div>
                  <div className="dropdownn" >
                    <NavLink className="dropdownitem" to="/Groups" onClick={() => setClosee(false)}>
                      Our Group
                    </NavLink>
                    <div className="scondlist">
                      <HashLink to="/Groups#DiarBusiness" onClick={() => setClosee(false)}>Diar For integrated business</HashLink>
                      <HashLink to="/Groups#Diar" onClick={() => setClosee(false)}>Diar For MANAGEMENT SPORTS & LEISURE FACILITIES</HashLink>
                      <HashLink to="/Groups#flash" onClick={() => setClosee(false)}>flash water</HashLink>
                      <HashLink to="/Groups#pixels" onClick={() => setClosee(false)}>pixels</HashLink>
                    </div>
                  </div>
                  <NavLink to="/Projects" onClick={() => setClosee(false)}>Our projects</NavLink>
                  <NavLink to="/ContactUs" onClick={() => setClosee(false)}>Contact us</NavLink>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/"><img src="images/mail.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navgroup align-items-center justify-content-between w-100">
              <NavLink to="/"> Home</NavLink>
              <div className="dropdownn">
                <NavLink className="dropdownitem" to="/About">
                  About Us
                </NavLink>
                <div className="dropdownlist">

                  <HashLink to="/About#mission">Our Mission</HashLink>
                  <HashLink to="/About#staff">Our Staff</HashLink>
                </div>
              </div>
              <div className="dropdownn" >
                <NavLink className="dropdownitem" to="/Groups">
                  Our Group
                </NavLink>
                <div className="scondlist">
                  <HashLink to="/Groups#DiarBusiness">Diar For integrated business</HashLink>
                  <HashLink to="/Groups#Diar">Diar For MANAGEMENT SPORTS & LEISURE FACILITIES</HashLink>
                  <HashLink to="/Groups#flash">flash water</HashLink>
                  <HashLink to="/Groups#pixels">pixels</HashLink>
                </div>
              </div>
              <NavLink to="/Projects">Our projects</NavLink>
              <NavLink to="/ContactUs">Contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  )
}

export default NavBar
