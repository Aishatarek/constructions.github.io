import React, { useState, useEffect, useRef } from "react";
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa"
import { ImLinkedin2 } from "react-icons/im"
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import emailjs from '@emailjs/browser';
function ContactUs() {
    const form = useRef();
    const sendEmail = (e) => {
        alert("message sent successfully")
        e.preventDefault();
        emailjs.sendForm('service_zxe53qh', 'template_y0oe95m', form.current, 'E61FDwVDfk3P-cPPS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <>
            <section className='contactsec1'>
                <div className="fadeInUp wow" data-wow-duration="2s" data-wow-delay="0.1s">
                    <h3>CONTACT US</h3>
                </div>
            </section>
            <section className='contactsec2'>
                <Container>
                    <Row>
                        <Col md="6" sm="12">
                            <div className="slideInLeft wow" data-wow-duration="2s" data-wow-delay="0.1s">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.3097136204456!2d31.140479500000005!3d29.999262099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584571d58ca7c7%3A0xaf7988634f30dd56!2sMonglnls!5e0!3m2!1sen!2seg!4v1662122042746!5m2!1sen!2seg" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div>
                                    <div className='mt-5'>
                                        <h5>ADDRESS:</h5>
                                        <p>Al Haram, Giza Governorate</p>
                                    </div>
                                    <div className='d-flex mt-5'>
                                        <div>
                                            <h5>PHONE:</h5>
                                            <p>01066674323	-	01061624413
                                                <br />
                                                01000753028    -    01201531313
                                            </p>
                                        </div>
                                        <div className='mx-5'>
                                            <h5>EMAIL:</h5>
                                            <p>diargroupconst@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='contacticons'>
                                    <FaFacebookF />
                                    <ImLinkedin2 />
                                </div>
                            </div>
                        </Col>
                        <Col md="6" sm="12">
                            <div className="slideInRight wow " data-wow-duration="2s" data-wow-delay="0.1s">
                                <div className='contactform'>
                                    <h3>DON’T HESITATE TO CONTACT US</h3>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div>
                                            <p>FIRST NAME*</p>
                                            <input type="text" name="f_name" />
                                        </div>
                                        <div>
                                            <p>LAST NAME*</p>
                                            <input type="text" name="l_name" />
                                        </div>
                                        <div>
                                            <p>EMAIL*</p>
                                            <input type="email" name="email" />
                                        </div>
                                        <div>
                                            <p>PHONE</p>
                                            <input type="tel" name="phone" />
                                        </div>
                                        <div>
                                            <p>COMMENT</p>
                                            <textarea name="message" ></textarea>
                                        </div>
                                        <input type="submit" value="Send" />
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='contactsec3'>
                <img src="images/map.jpg" alt="" />
                <div className='location'></div>
                <div className='info'>
                    <h3>Monglnls</h3>
                    <div className='d-flex my-1'>
                        <GoLocation />
                        <p>جمال الدين البنا، كفر نصار، الهرم<br /> Al Haram, Giza Governorate</p>
                    </div>
                    <div className='d-flex my-1'>
                        <BsTelephone />
                        <p>
                            01066674323
                            <br />
                            01061624413
                            <br />
                            01000753028
                            <br />
                            01201531313
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs