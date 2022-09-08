import React from 'react'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap';

function Groups() {
  return (
    <>
      <section className='groupssec1'>
        <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Our Groups</h3>
        </div>
      </section>
      <section className='groupsec bg' id="DiarBusiness">
        <Container fluid>
          <Row className='align-items-center'>
            <Col md="6" sm="12">
              <img className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/Picture5.png" alt="" />
            </Col>
            <Col md="6" sm="12" className="grouptext">
              <div className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/Picture5.png">
                <h3>Diar For integrated business</h3>
                <ul>
                  <li>
                    <span>
                      We are a young group of individuals from different professional backgrounds each with a passion to be part of something bigger than themselves.
                    </span>
                  </li>
                  <li>
                    <span>
                      So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                    </span>
                  </li>
                  <li>
                    <span>
                      We offer client :- Swimming pool - Fire fighting system - General Contracting - Infrastructure Networks - Finishing Works and Electro-mechanical Works.
                    </span>
                  </li>
                  <li>
                    <span>
                      we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section >
      <section className='groupsec' id="Diar">
        <Container fluid>
          <Row className='align-items-center'>
            <Col md="6" sm="12" className="grouptext">
              <div className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s">
                <h3>Diar For MANAGEMENT SPORTS & LEISURE FACILITIES</h3>
                <ul>
                  <li>
                    <span>
                      A company operating in the Egyptian market and specialized in the management and operation of sports and entertainment facilities through a clear strategy
                    </span>
                  </li>
                  <li>
                    <span>
                      Our company has a good vision in the field of developing sports and social activity and works hard to provide projects that serve the developmental goal that the state strives to provide through services worthy of the people of this great country.
                    </span>
                  </li>
                  <li>
                    <span>
                      The company seeks, through the strategy it operates, to search for service places that need to be developed
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6" sm="12">
              <img className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/Picture3.png" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='groupsec bg' id="flash">
        <Container fluid>
          <Row className='align-items-center'>
            <Col md="6" sm="12">
              <img src="images/Picture6.png" className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s" alt="" />
            </Col>
            <Col md="6" sm="12" className="grouptext">
              <div className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s">
                <h3>flash water</h3>
                <ul className="swiperp">
                  <li>
                    <span>
                      So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                    </span>
                  </li>
                  <li>
                    <span>
                      We offer client :- Swimming pool and Electro-mechanical Works.
                    </span>
                  </li>
                  <li>
                    <span>
                      we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container >
      </section >
      <section className='groupsec' id="pixels">
        <Container fluid>
          <Row className='align-items-center'>
            <Col md="6" sm="12" className="grouptext">
              <div className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s">
                <h3>pixels</h3>
                <ul>
                  <li>
                    <span>
                      PIXELS is a digital marketing agency dedicated to transforming brands and businesses into success stories through practical data-centric marketing approaches.
                    </span>
                  </li>
                  <li>
                    <span>
                      Our enthusiasm for new ideas, technologies and solutions is unparalleled, which shows in our results.
                    </span>
                  </li>
                  <li>
                    <span>
                      We pursue connections based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.
                    </span>
                  </li>
                  <li>
                    <span>
                      We offer social media services, create and manage top-performing social media campaigns for businesses.
                    </span>
                  </li>
                  <li>
                    <span>
                      Our agency manages social media networks such as Twitter, Facebook and Instagram on your behalf.
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6" sm="12">
              <img className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/Picture4.png" alt="" />
            </Col>
          </Row>
        </Container>
      </section >
      <Footer />
    </>
  )
}

export default Groups