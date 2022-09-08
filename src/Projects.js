import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import Footer from './Footer';
import { BsArrowRight } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Projects() {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [iddd, setIddd] = useState(0);

  useEffect(() => {
    axios.get("data.json")
      .then((res) => {
        setProjects(res.data.projects)
      })
  }, [])
  const handleShowee = (idd = 0) => {
    setIddd(idd - 1)
    setShow(true)
  }

  const handleClose = () => setShow(false)

  return (
    <>
      <section className='projectssec1'>
        <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Our Projects</h3>
        </div>
      </section>
      <section className='projectssec2'>
        <h3 className="fadeInDown wow" data-wow-duration="2s" data-wow-delay="0.1s">Projects</h3>
        <Container>
          <Row>
            {projects.slice(0, 7).map((project) => {
              return (
                <Col md="4" sm="12" key={project.id} onClick={() => handleShowee(project.id)}>
                  <div className="projectdiv bounceIn wow" data-wow-duration="2s" data-wow-delay={`0.${project.id * 4}s`}>
                    <img className='projectimg' src={project.img1} alt="project" />
                    <div className='hoverproject'>
                      <p>{project.title}</p>
                      <h5>{project.owner}</h5>
                      <BsArrowRight />
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>

      </section>
      <section className='projectssec3'>
        <Container>
          <Row>
            <Col md="6" sm="12" className='detaildiv'>
              <div className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s">
                <h5>OUR WORK</h5>
                <h3>Our Land scape Projects</h3>
                <p>We have a wealth of experience working as main contractors on all kinds of projects, big and small, from home maintenance and improvements to extensions.</p>
              </div>
            </Col>
            <Col md="6" sm="12">
              <img className='detailimg slideInRight wow' data-wow-duration="2s" data-wow-delay="0.1s" src="images/SLO-pqxohas18by3uuetq4j91wu9t9hveajwagtiatomee.jpg" alt='' />
            </Col>
            {projects.slice(7, 16).map((project) => {
              return (
                <Col md="4" sm="12" key={project.id} onClick={() => handleShowee(project.id)}>
                  <div className="projectdiv bounceInUp wow span3" data-wow-duration={`${project.id}00ms`} data-wow-delay={`${project.id}00ms`}>
                    <img className='projectimg' src={project.img1} alt="land scape" />
                    <div className='hoverproject'>
                      <p>{project.title}</p>
                      <BsArrowRight />
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      {show ?
        <Modal show={show} onHide={handleClose} className="projectmodal" centered>
          <Modal.Body>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              
            >
              {projects[iddd].img1 ?
                <SwiperSlide><img src={projects[iddd].img1} alt="" /></SwiperSlide>
                : null}
              {projects[iddd].img2 ?
                <SwiperSlide><img src={projects[iddd].img2} alt="" /></SwiperSlide>
                : null}
              {projects[iddd].img3 ?
                <SwiperSlide><img src={projects[iddd].img3} alt="" /></SwiperSlide>
                : null}
            </Swiper>

          </Modal.Body>

        </Modal>
        : null}
      <Footer />
    </>
  )
}

export default Projects