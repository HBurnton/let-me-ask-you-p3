import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import question from '../assets/images/question.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../assets/css/Banner.css';

export const Banner = () => {
    

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? 'animated__animated animate__fadeIn' : ''}>
                    <span className='tagline'>WELCOME</span>
                    <p>LET ME ASK YOU...
                        <p>
                            SOCIAL MEDIA & ANONYMOUS QUESTIONARE
                        </p>
                    </p>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={question} alt="Header Img"/>
                        </div>}
               </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}