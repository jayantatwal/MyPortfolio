import React from 'react'
// import Projects from './components/Projects';
import { Col } from 'react-bootstrap'


export default function ProjectCards({ title, description, imgUrl }) {
    // /This file is used to show each project in a card format.
    return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt='' />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
