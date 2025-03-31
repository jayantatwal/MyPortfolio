import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCards from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css'
import TrackVisibility from 'react-on-screen'


export default function Projects() {

    const projects = //We're gonna have list of projects and this will hold info about projects (Title,Description and Image URL)
        [
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg2,
            },
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg3,
            },
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg1,
            },
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg2,
            },
            {
                title: "Business Startup",
                description: "Design and Development",
                imgUrl: projImg3,
            },
        ];
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate quibusdam distinctio ipsam molestiae beatae officia eius in? Laudantium nesciunt labore voluptatem dolore fugit molestias impedit distinctio nobis? Cumque, adipisci?</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                        <Nav variant="pills" className='nav-pills' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className='my-3'>
                                            <Tab.Pane eventKey='first'>
                                                <Row>{ //You want to show each project as a card.
                                                    //For each project, you use the ProjectCards component to display it.
                                                    //This code takes each project from the list and creates a ProjectCards component for it.
                                                    projects.map((project, index) => {
                                                        //key={index} helps React keep track of each card.
                                                        //{...project} spreads the project details as individual props(title,description and imgUrl)
                                                        return (
                                                            <ProjectCards key={index}{...project} />
                                                        )
                                                    })
                                                }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>
                                                <Row>{
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCards key={index}{...project} />
                                                        )
                                                    })
                                                }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='third'>
                                                <Row>{
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCards key={index}{...project} />
                                                        )
                                                    })
                                                }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                    </div>}
                                </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='' ></img>

        </section >
    )
}
