import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEngineering } from "react-icons/md"
import { BsArrowRight } from "react-icons/bs"
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { RiAwardFill } from "react-icons/ri"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FiHeadphones } from "react-icons/fi"
import { GiTeamIdea } from "react-icons/gi"
import Footer from "./Footer";
function Home() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter == 16) {
                clearInterval();
            } else {
                setCounter(counter + 1);
            }
            if (counter2 == 8) {
                clearInterval();
            } else {
                setCounter2(counter2 + 1);
            }
            if (counter3 == 10) {
                clearInterval();
            } else {
                setCounter3(counter3 + 1);
            }

        }, 800);
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <>
            <section className="homeSec1">
                <div className="wow fadeInUp span12" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h5>BUILT WITH EXCELLENCE</h5>
                    <h1>
                        Diar Group
                    </h1>
                    <p>DIAR Group has been instrumental in the development of major construction projects across the country. Both founders had the vision to develop the future, based on their considerable previous expertise as executives in prominent construction enterprises in Egypt.</p>

                </div>
            </section>
            <section className="homesec2">
                <Container>
                    <h2 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Our Group</h2>
                    <Row>
                        <Col lg="3" md="3" sm="12" >
                            <div >
                                <div className="hoverdiv wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/Picture3.png" alt="" />
                                    <p>Diar Group</p>
                                    <h3>01</h3>
                                </div>
                                <div className="detailhover">
                                    <div className="detailsdiv">
                                        <h3>
                                            Diar Group
                                        </h3>
                                        <p>
                                            A company operating in the Egyptian market and specialized in the management and operation of sports and entertainment facilities through a clear strategy
                                        </p>
                                        {button1 ?
                                            <>
                                                <p>
                                                    Our company has a good vision in the field of developing sports and social activity and works hard to provide projects that serve the developmental goal that the state strives to provide through services worthy of the people of this great country.
                                                </p>
                                                <p>
                                                    The company seeks, through the strategy it operates, to search for service places that need to be developed
                                                </p>
                                                <button onClick={() => setButton1(false)}>See Less</button>
                                            </>
                                            :
                                            <button onClick={() => setButton1(true)}>See More</button>
                                        }
                                        <BsArrowRight />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" >
                            <div >
                                <div className="hoverdiv wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/Picture4.png" alt="" />
                                    <p>Pixels</p>
                                    <h3>02</h3>
                                </div>
                                <div className="detailhover">
                                    <div className="detailsdiv">
                                        <h3>
                                            Pixels
                                        </h3>
                                        <p>
                                            PIXELS is a digital marketing agency dedicated to transforming brands and businesses into success stories through practical data-centric marketing approaches.
                                        </p>
                                        {button2 ?
                                            <>
                                                <p>
                                                    Our enthusiasm for new ideas, technologies and solutions is unparalleled, which shows in our results.
                                                </p>
                                                <p>
                                                    We pursue connections based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.
                                                </p>
                                                <p>
                                                    We offer social media services, create and manage top-performing social media campaigns for businesses.
                                                </p>
                                                <p>
                                                    Our agency manages social media networks such as Twitter, Facebook and Instagram on your behalf.
                                                </p>
                                                <button onClick={() => setButton2(false)}>See Less</button>
                                            </>
                                            :
                                            <button onClick={() => setButton2(true)}>See More</button>
                                        }

                                        <BsArrowRight />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" >
                            <div >
                                <div className="hoverdiv wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/Picture5.png" alt="" />
                                    <p>Diar Group</p>
                                    <h3>03</h3>
                                </div>
                                <div className="detailhover">
                                    <div className="detailsdiv">
                                        <h3>
                                            Diar Group
                                        </h3>

                                        <BsArrowRight />
                                        <p>
                                            We are a young group of individuals from different professional backgrounds each with a passion to be part of something bigger than themselves.
                                        </p>
                                        {button3 ?
                                            <>
                                                <p>
                                                    So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                                                </p>
                                                <p>
                                                    We offer client :- Swimming pool - Fire fighting system - General Contracting - Infrastructure Networks - Finishing Works and Electro-mechanical Works.
                                                </p>
                                                <p>
                                                    we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.
                                                </p>
                                                <button onClick={() => setButton3(false)}>See Less</button>
                                            </>
                                            :
                                            <button onClick={() => setButton3(true)}>See More</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" >
                            <div >
                                <div className="hoverdiv wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                    <img src="images/Picture6.png" alt="" />
                                    <p>Flash Water</p>
                                    <h3>04</h3>
                                </div>
                                <div className="detailhover">
                                    <div className="detailsdiv">
                                        <h3>
                                            Flash Water
                                        </h3>
                                        <p>
                                            So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                                        </p>

                                        {button4 ?
                                            <>
                                                <p>
                                                    We offer client :- Swimming pool and Electro-mechanical Works.
                                                </p>
                                                <p>
                                                    we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.
                                                </p>
                                                <button onClick={() => setButton4(false)}>See Less</button>
                                            </>
                                            :
                                            <button onClick={() => setButton4(true)}>See More</button>
                                        }
                                        <BsArrowRight />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="homesec3">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="sec3imgdiv wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                                <img src="images/executives-working-together-project.jpg" alt="" className="mainimg" />
                                <img src="images/IMG-8038.jpg" alt="" className="img1" />
                                <img src="images/IMG-8039.jpg" alt="" className="img2" />
                                <img src="images/IMG-8040.jpg" alt="" className="img3" />
                                <img src="images/IMG-8042.jpg" alt="" className="img4" />
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                                <h5>About us</h5>
                                <h3>Diar Group a young group of individuals from different professional background <span>each with a passion to be part of something bigger than themselves</span></h3>
                                <p> So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.</p>
                                <div className="iconssec3">
                                    <div>
                                        <GiTeamIdea />
                                        <p>Our Team</p>
                                    </div>
                                    <div>
                                        <FiHeadphones />
                                        <p>Call For Inquires</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section className="homesec8">
                <Container>
                    <Row className="align-items-center">
                        <Col md="6" lg="6" sm="12" className="wow slideInLeft span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="sec8div">
                                <img src="images/dots.webp" alt="" />
                                <h5>WHAT PEOPLE SAY</h5>
                                <h3>Client's Talk</h3>
                                <p>We have a wealth of experience working as main building contractors on all kinds of projects, big and small, from home maintenance and improvements to extensions, refurbishments and new builds.</p>
                            </div>
                        </Col>
                        <Col md="6" lg="6" sm="12" className="wow fadeInUp span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={true}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="swipertalk">
                                        <p>I noticed one thing: it's very productive to discuss a project with pople who have technical background. I forgot how to explain obvious technical things that often happen with more humanitarian people and just get more done.</p>
                                        <div className="swipertalkdiv">
                                            <img src="images/user1.webp" alt="" />
                                            <div>
                                                <h3>Tiffany Daniels</h3>
                                                <p>CUSTOMER</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swipertalk">
                                        <p>Amazing work and professionalism. Great job.</p>
                                        <div className="swipertalkdiv">
                                            <img src="images/user1.webp" alt="" />
                                            <div>
                                                <h3>Dimitrios Karakoutas</h3>
                                                <p>CUSTOMER</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swipertalk">
                                        <p>I hired them for total renovation. They did a great job. Everything I wanted and on time. Will hire them again if i need repairs.</p>
                                        <div className="swipertalkdiv">
                                            <img src="images/user1.webp" alt="" />
                                            <div>
                                                <h3>pbibbo</h3>
                                                <p>CUSTOMER</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="homesec4">
                <Container>
                    <Row>
                        <Col lg="3" md="3" sm="12" className="wow slideInLeft span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <h5>PREMIUM SERVICES</h5>
                            <h3>We provide the best services</h3>
                            <p>in our fields of work and the purpose of which is to provide the best quality and the best follow-up in proportion to the needs of customers in all the services provided by the group, to always become the number 1 choice for those interested in these services, signing more contracts with major national companies, and providing the best and latest methods for maintaining buildings and facilities.</p>
                        </Col>

                        <Col lg="9" md="9" sm="12">
                            <Row>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.1s">
                                        <div className="serviceicon">
                                            <img src="images/Picture25.png" alt="" />
                                        </div>
                                        <h3>Fire fighting  system </h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="serviceicon">
                                            <img src="images/Picture26.png" alt="" />
                                        </div>
                                        <h3>Land scape</h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.5s">
                                        <div className="serviceicon">
                                            <img src="images/Picture27.png" alt="" />
                                        </div>
                                        <h3>Swimming pool </h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.1s">
                                        <div className="serviceicon">
                                            <img src="images/Picture28.png" alt="" />
                                        </div>
                                        <h3>Infrastructure Networks</h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="serviceicon">
                                            <img src="images/Picture29.png" alt="" />
                                        </div>
                                        <h3>Finishing Work</h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.5s">
                                        <div className="serviceicon">
                                            <img src="images/Picture30.png" alt="" />
                                        </div>
                                        <h3>Electro - Mechanical Works </h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <div className="serviceicon">
                                            <img src="images/Picture31.png" alt="" />
                                        </div>
                                        <h3>Marketing campaign</h3>
                                    </div>
                                </Col>
                                <Col md="3" sm="12">
                                    <div className="servicediv wow bounceIn span12" data-wow-duration="2s" data-wow-delay="0.1s">
                                        <div className="serviceicon">
                                            <img src="images/Picture32.png" alt="" />
                                        </div>
                                        <h3>Facilities  and Asset Management</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="homesec5">
                <Container fluid>
                    <Row>
                        <Col lg="3" md="3" sm="12">
                            <div className="d-flex align-items-center">
                                <div className="sec5after">
                                </div>
                                <div>
                                    <div className="sec5flex">
                                        <RiAwardFill />
                                        <h3>{counter} +</h3>
                                    </div>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12">
                            <div className="d-flex align-items-center">
                                <div className="sec5after">

                                </div>
                                <div>
                                    <div className="sec5flex">
                                        <RiAwardFill />
                                        <h3>{counter2} +</h3>
                                    </div>
                                    <p>Services</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12">
                            <div className="d-flex align-items-center">
                                <div className="sec5after">

                                </div>
                                <div>
                                    <div className="sec5flex">
                                        <RiAwardFill />
                                        <h3>{counter3} +</h3>
                                    </div>
                                    <p>Clients</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="12" className="sec5call">
                            <AiFillPhone />
                            <div>
                                <p>Call for help!</p>
                                <h3>
                                01066674323
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="homesec6">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <h5>Great Events</h5>
                            <h3>Now DIAR Group is targeting fourth generation cities <span> in Egypt</span> such as :</h3>
                            <ol>
                                <li>The New Administrative Capital</li>
                                <li>New Alamein</li>
                            </ol>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={true}
                                autoplay={{ delay: 1000 }}
                                modules={[Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src="images/Picture19.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture20.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture22.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture23.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture24.png" alt="" /></SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <h5>Happy Clients</h5>
                            <h3>We are proud to <span> work with</span></h3>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                autoplay={{ delay: 1000 }}
                                modules={[Autoplay]}
                                className="mySwiper clientslider"
                            >
                                <SwiperSlide><img src="images/Picture7.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture8.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture9.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture10.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture11.png" alt="" /></SwiperSlide>
                            </Swiper>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                autoplay={{ delay: 1000 }}
                                modules={[Autoplay]}
                                className="mySwiper clientslider"
                            >
                                <SwiperSlide><img src="images/Picture12.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture13.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture14.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture15.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="images/Picture16.png" alt="" /></SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="homesec7">
                <Container className="wow fadeInUp span12" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h5>PREMIUM SERVICES</h5>
                    <h3>We provide the <span> best services</span></h3>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg="3" md="3" sm="12" className="wow bounceInLeft span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="logosdiv">
                                <img src="images/Picture3.png" alt="" />
                                <ul className="swiperp">
                                    <li>
                                        A company operating in the Egyptian market and specialized in the management and operation of sports and entertainment facilities through a clear strategy
                                    </li>
                                    <li>
                                        Our company has a good vision in the field of developing sports and social activity and works hard to provide projects that serve the developmental goal that the state strives to provide through services worthy of the people of this great country.
                                    </li>
                                    <li>
                                        The company seeks, through the strategy it operates, to search for service places that need to be developed
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" className="wow bounceInDown span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="logosdiv">
                                <img src="images/Picture5.png" alt="" />
                                <ul className="swiperp">
                                    <li>
                                        We are a young group of individuals from different professional backgrounds each with a passion to be part of something bigger than themselves.
                                    </li>
                                    <li>
                                        So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                                    </li>
                                    <li>
                                        We offer client :- Swimming pool - Fire fighting system - General Contracting - Infrastructure Networks - Finishing Works and Electro-mechanical Works.
                                    </li>
                                    <li>
                                        we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" className="wow bounceInUp span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="logosdiv">
                                <img src="images/Picture4.png" alt="" />
                                <ul className="swiperp">
                                    <li>
                                        PIXELS is a digital marketing agency dedicated to transforming brands and businesses into success stories through practical data-centric marketing approaches.
                                    </li>
                                    <li>
                                        Our enthusiasm for new ideas, technologies and solutions is unparalleled, which shows in our results.
                                    </li>
                                    <li>
                                        We pursue connections based on transparency, persistence, mutual trust, and integrity with our employees, customers and other business partners.
                                    </li>
                                    <li>
                                        We offer social media services, create and manage top-performing social media campaigns for businesses.
                                    </li>
                                    <li>
                                        Our agency manages social media networks such as Twitter, Facebook and Instagram on your behalf.                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3" md="3" sm="12" className="wow bounceInRight span12" data-wow-duration="2s" data-wow-delay="0.1s">
                            <div className="logosdiv">
                                <img src="images/Picture6.png" alt="" />
                                <ul className="swiperp">
                                    <li>
                                        So we brought everything we know together, to build on one another and create a single entity that provides a premium service to other businesses.
                                    </li>
                                    <li>
                                        We offer client :- Swimming pool and Electro-mechanical Works.
                                    </li>
                                    <li>
                                        we are here to make sure your company gets what it needs to achieve its goal. We believe that we only succeed when the client we serve succeeds first.                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <Footer />
        </>
    )
}

export default Home