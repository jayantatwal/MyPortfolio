import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg';

//This is the Contact component that renders the contact form and related content
export default function Contact() {
    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        {/* This contactImg is the man on right side of contact */}
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        {/* 
                            We use Formspree to handle form submission.
                            Replace 'YOUR_FORM_ID' with your actual Formspree form ID from your dashboard.
                            The action attribute sends form data directly to Formspree.
                        */}
                        <form
                            action="https://formspree.io/f/xdkggkrz"
                            method="POST" // Use POST to send data securely
                        >
                            <Row>
                                {/* First Name Input Field */}
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='text'
                                        name='firstName' // Field name expected by Formspree
                                        placeholder='First Name'
                                        required // Makes field mandatory
                                    />
                                </Col>

                                {/* Last Name Input Field */}
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='text'
                                        name='lastName'
                                        placeholder='Last Name'
                                        required
                                    />
                                </Col>

                                {/* Email Input Field */}
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email Address'
                                        required
                                    />
                                </Col>

                                {/* Phone Number Input Field */}
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='tel'
                                        name='phone'
                                        placeholder='Phone no.'
                                    />
                                </Col>

                                {/* Message Textarea */}
                                <Col>
                                    <textarea
                                        name='message'
                                        rows='6'
                                        placeholder='Message'
                                        required
                                    ></textarea>

                                    {/* Submit Button */}
                                    <button type='submit'>
                                        <span>Send</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
