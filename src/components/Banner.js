import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImage from '../assets/img/header-img.svg'
import 'animate.css'//used to add animations
import TrackVisibility from 'react-on-screen'
// import { isVisible } from '@testing-library/user-event/dist/utils'
//This is used so that when a user will be seeing the component only then the animation will start


export default function Banner() {
    const [loopNum, setLoopNum] = useState(0) //Keeps track of which phrase we're currently showing.
    const [isDeleting, setIsDeleting] = useState(false) //Determines if we're deleting text.
    const toRotate = ["Developer", "Video Editor", "Web Developer"] //An array of phrases to cycle through.
    const [text, setText] = useState('')//The current text being shown on the screen.
    const [delta, setDelta] = useState(300 - Math.random() * 100)//Controls the speed of typing/deleting.
    const period = 2000//Before deletion starts

    useEffect(() => { //After the page is mounted this function will be responsible of typing and deleting the Strings
        //Runs a function tick repeatedly every delta milliseconds to update the text state.
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }//Stops the function when the component is unmounted.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])


    /*How it Works:
        Typing and Deleting:
        The tick function changes the text every delta milliseconds.
        If isDeleting is true, it removes characters.
        If isDeleting is false, it adds characters.

        Switching Phrases:
        Once a phrase is fully typed, start deleting it.
        After deleting the phrase, move to the next one.

        Timing:
        delta controls how fast text appears or disappears.
        It changes based on whether we’re typing or deleting.
        */

    const tick = () => {
        let i = loopNum % toRotate.length; //It will traverse the array again and again
        let fullText = toRotate[i] // current phrase we're working with
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        // updatedText gets longer if typing (isDeleting is false) or shorter if deleting (isDeleting is true).

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2) //If deleting, slow down by making delta smaller.
        }
        if (!isDeleting && updatedText === fullText) {
            //If typing and updatedText matches fullText, start deleting and set delta to period.
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') { //If there is no text now go the second phrase and print it in the same pattern
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                    {/* In the above div we are basically defining that if the content is on the screen then animate it  */}
                                    {/* if its not on the screen, don't animate it */}
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    {/* <h1>{`Hi I'm Jayant`}<br /><span className='wrap'>{text}</span></h1> */}
                                    <h1>{`Hi! I'm Jayant`}<br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Hi, I'm a passionate C++, Java, and React Developer. I love solving coding challenges and building efficient, scalable applications for web and mobile.</p>
                                    <button onClick={() => window.open("https://www.linkedin.com/in/jayantatwal", '_blank')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                                </div>}
                        </TrackVisibility>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header Img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
