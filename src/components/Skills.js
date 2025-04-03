import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

//This react-multi-carousel library provides a carousel(slider) component.
//It allows you to display a series of images or other content in a horizontally scrolling format. 

export default function Skills() {

    const responsive = {
        //This code defines a responsive object for a carousel component to specify how many items should be displayed based on different screen sizes.
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skill
                            </h2>
                            <p>I have a strong foundation in C, C++, Java, and JavaScript, enabling me to build efficient and scalable applications. As a frontend developer, I specialize in React.js and React Native, crafting dynamic web and mobile applications with clean and responsive UI using HTML, CSS, and Bootstrap. On the backend, I work with Firebase, Firestore, and SQL, ensuring seamless data management and real-time updates. I am also proficient in DBMS concepts and have experience integrating databases with applications. Additionally, I use Git & GitHub for version control and collaborate on projects effectively. Beyond development, I actively solve coding challenges on LeetCode and HackerRank, continuously improving my problem-solving skills.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='skill' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='skill' />
                                    <h5>Logical Thinking</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='skill' />
                                    <h5>Designing</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='skill' />
                                    <h5>Data Structure And Algorithms</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='skillbg' />

        </section>
    )
}
