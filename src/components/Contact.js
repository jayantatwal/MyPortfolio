import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg';

export default function Contact() {

    const formIntialDetail = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formIntialDetail)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, //This syntax creates a copy of the current formDetails object.
            [category]: value // This sets the value of the specific category in the form state to the new value.
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await fetch("http://localhost:5000/contact", { //Sends an HTTP request to the specified URL.
            method: 'POST', //Specifies that this is a POST request, used to send data to the server.
            headers: {
                "Content-Type": "Application/json;charset=utf-8", //tells the server that the data being sent is in JSON format.
            },
            body: JSON.stringify(formDetails)
            // Converts the formDetails object (which contains the form data) into a JSON string to be sent to the server.
        });
        setButtonText('Send')
        let result = response.json()
        setFormDetails(formIntialDetail)
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' })
        } else {
            setStatus({ success: false, message: 'Something went wrong please try again later' })
        }
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg}/*This contactImg is the man on right side of contact*/ alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name'
                                        onChange={(e) => { onFormUpdate('firstName', e.target.value) }} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name'
                                        onChange={(e) => { onFormUpdate('lastName', e.target.value) }} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email Address'
                                        onChange={(e) => { onFormUpdate('email', e.target.value) }} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone no.'
                                        onChange={(e) => { onFormUpdate('phone', e.target.value) }} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder='Message'
                                        onChange={(e) => { onFormUpdate('message', e.target.value) }} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "sucess"}></p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
