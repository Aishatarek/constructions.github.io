import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillPhone } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { ImLinkedin2 } from "react-icons/im"
import { Link, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to="#home"><img src="images/mail.png" alt="" /></Navbar.Brand>
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
      </Navbar>
    </>
  )
}

export default NavBar