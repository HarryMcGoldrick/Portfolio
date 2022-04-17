import { Col, Container, Image, Row } from 'react-bootstrap';
import { DescriptorCard } from '../descriptor-card/descriptor-card';
import './projects-page.css';
import projects from './project-list';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {ImgCarousel} from '../img-carousel/img-carousel.jsx'


export const ProjectsPage = () => {

    useEffect(() => {
        Aos.init({
            offset: 300,
            delay: 50
        });
    });


    return (
        <>
            <div className="projects-title">
                <h1 className="title-text">Projects</h1>
                <img
                    src="WhiteBreak.png"
                >
                </img>
            </div>
            <div>
                <Container fluid className="project-container">
                    {projects.map((element, index) => {
                        if (index % 2 === 0) { //Left -> Right -> Left
                            return(
                            <div data-aos="fade-up">
                                <Row id={index} style={{paddingBottom: '8rem'}}>
                                    <Col lg={6} md={12} className="text-holder" style={{paddingRight: '5rem'}}>
                                        <DescriptorCard project={element}
                                        ></DescriptorCard>
                                    </Col>
                                    <Col lg={6} md={12} className="image-holder" style={{paddingLeft: '1rem'}}>
                                        <ImgCarousel 
                                        imgs={element.imgs}
                                        >
                                        </ImgCarousel>
        
                                    </Col>
                                </Row>
                            </div>
                            )
                        } else {
                            return (
                            <div data-aos="fade-up">
                                <Row id={index} style={{paddingBottom: '8rem'}}>
                                    <Col lg={6} md={12} className="image-holder" style={{paddingRight: '3rem'}}>
                                    <ImgCarousel
                                        imgs={element.imgs}
                                        >
                                        </ImgCarousel>
                                    </Col>
                                    <Col lg={6} md={12} className="text-holder" style={{paddingRight: '5rem'}}>
                                        <DescriptorCard project={element}
                                        ></DescriptorCard>
                                    </Col>
                                </Row>
                            </div>
                                )
                        }
                    })}

                </Container>
            </div>
        </>
    );
}