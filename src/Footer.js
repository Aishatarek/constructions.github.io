import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { ImLinkedin2, ImLocation2 } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3" md="3" sm="12" className="wow fadeInLeft span12" data-wow-duration="2s" data-wow-delay="0.1s">
            <img src="images/mail.png" alt="" />
          </Col>
          <Col lg="3" md="3" sm="12" className="wow fadeInDown span12" data-wow-duration="2s" data-wow-delay="0.1s">
            <h5>
              USEFUL LINKS
            </h5>
            <div>
              <Link to="/">Home</Link>
              <Link to="/About">About Us</Link>
              <Link to="/ContactUs">Contact us</Link>
              <Link to="/Groups">Our Group</Link>
              <Link to="/Projects">Our Projects </Link>
            </div>
          </Col>
          <Col lg="3" md="3" sm="12" className="wow fadeInUp span12" data-wow-duration="2s" data-wow-delay="0.1s">
            <h5>
              OPENING HOURS
            </h5>
            <p>Sunday – Thursday  : 9:00AM to 5:00PM </p>
            <p>Friday- Saterday :  Closed</p>
            <div className="iconsfooter">
              <div><FaFacebookF /></div>
              <div> <ImLinkedin2 /></div>
            </div>
          </Col>
          <Col lg="3" md="3" sm="12" className="wow fadeInRight span12" data-wow-duration="2s" data-wow-delay="0.1s">
            <h5>
              CONTACT HERE
            </h5>
            <div>
              <a href="#"><ImLocation2 /> Address: Al Haram, Giza Governorate</a>
              <a href="#"><AiFillPhone /> Phone :<br />
                <span style={{marginLeft:"50px"}}>
                  01066674323	-	01061624413
                  </span>
                  <br />
                  <span style={{marginLeft:"50px"}}>
                  01000753028    -    01201531313
                </span>
              </a>
              <a href="#"><MdEmail /> Email : diargroupconst@gmail.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer