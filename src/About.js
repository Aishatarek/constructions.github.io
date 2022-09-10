import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BsShield, BsPeople, BsSunrise } from "react-icons/bs"
import { FaPeopleArrows } from "react-icons/fa"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { MdManageAccounts, MdOutlineEngineering } from 'react-icons/md';
import { IoIosPerson } from 'react-icons/io';
import { Element } from 'react-scroll'

function About() {
    return (
        <>
            <section className='aboutsec1'>
                <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h3>About US</h3>
                </div>
            </section>
            <section className='aboutsec2'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>
                                    Our Company
                                </h3>
                                <p>
                                    We are a young group of individuals from different professional background each with a passion to be part of something bigger than themselves.
                                    So we brought everything we know together, to build on one another and create  a single entity that provides a premium service to other businesses.
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <img className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/Picture111.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='aboutsec3'>
                <Container>
                    <h3 className="fadeInDown wow span12" data-wow-duration="2s" data-wow-delay="0.1s">We help you with your next project.</h3>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
                                <BsShield />
                                <div>
                                    <h5>Safety & Wellness First</h5>
                                    <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.2s">
                                <BsPeople />
                                <div>
                                    <h5>Client-Focused Solutions</h5>
                                    <p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.3s">
                                <FaPeopleArrows />
                                <div>
                                    <h5>Family-oriented</h5>
                                    <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.4s">
                                <BsSunrise />
                                <div>
                                    <h5>Weatherproofed Longevity</h5>
                                    <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="mission" className='aboutsec4'>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <img className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s" src="images/swrwcp vision and mission.jpg" alt="" />
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="slideInRight wow" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h3>
                                    Our Mission
                                </h3>
                                <p>
                                    Providing the best services in the projects of infrastructure to  achieve the customer satisfaction through high quality  implementation fast accomplishment with high quality  specifications and standards and competitive prices.
                                </p>
                                <h3>
                                    Our Values
                                </h3>
                                <ul>
                                    <li>Work Hard</li>
                                    <li>Work Smart</li>
                                    <li>Work Different</li>
                                    <li>Work Together</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='aboutsec5'>
                <Container>
                    <div className="fadeInDown wow" data-wow-duration="2s" data-wow-delay="0.1s">
                        <h3>Want to know more about us?</h3>
                        <p>Just download company profile</p>
                    </div>
                    <div>
                        <Row>
                            <Col lg="4" md="4" sm="12">
                                <a href="pds/DIAR.pdf" download className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <AiOutlineCloudDownload /> Diar Profile
                                </a>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <a href="pdfs/DIAR GROUP.pdf" download className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <AiOutlineCloudDownload /> Diar Group Profile
                                </a>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <a href="pdfs/PIXELS-Final.pdf" download className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <AiOutlineCloudDownload /> Pixels Profile
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </section>
            <section className='aboutsec6' id="staff">
                <h2 className="fadeInDown wow span12" data-wow-duration="2s" data-wow-delay="0.1s">Meet our Staff</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    // loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay]}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                    // modules={[Autoplay]}
                    // className="mySwiper clientslider"
                    className="mySwiper fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s"
                >
                    <SwiperSlide>
                        <div>
                        <IoIosPerson />
                            <h3>Mohamed Samer</h3>
                            <p>Projctor manger</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <IoIosPerson />
                            <h3>Ahmed Atef</h3>
                            <p>Markting& PR Director</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <IoIosPerson />
                            <h3>Ahmed Magdy</h3>
                            <p>Legal Affairs Director</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <IoIosPerson />
                            <h3>Saed Ezz Elden</h3>
                            <p>Landscape department Director</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <IoIosPerson />
                            <h3>Ramy Ariq</h3>
                            <p>Sales Director</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <Footer />
        </>
    )
}

export default About
