import { Col, Container, Row } from 'react-bootstrap';
import { DescriptorCard } from '../descriptor-card/descriptor-card';
import { ProjectCard } from '../project-card/project-card';
import './projects-page.css';
import projects from './project-list';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


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
                        if (index % 2 === 0) {
                            return(
                            <div data-aos="fade-up">
                                <Row id={index} style={{paddingBottom: '8rem'}}>
                                    <Col xs={6} className="text-holder" style={{paddingRight: '5rem'}}>
                                        <DescriptorCard project={element}
                                        ></DescriptorCard>
                                    </Col>
                                    <Col xs={6} className="image-holder" style={{paddingLeft: '1rem'}}>
                                        <ProjectCard img={element.img} title='test' description='test'> </ProjectCard>
                                    </Col>
                                </Row>
                            </div>
                            )
                        } else {
                            return (
                            <div data-aos="fade-up">
                                <Row id={index} style={{paddingBottom: '8rem'}}>
                                    <Col xs={6} className="image-holder">
                                        <ProjectCard img={element.img} title='test' description='test'> </ProjectCard>
                                    </Col>
                                    <Col xs={6} className="text-holder" style={{paddingRight: '5rem'}}>
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