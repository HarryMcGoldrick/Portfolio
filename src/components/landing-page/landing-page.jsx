import './landing-page.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

export const LandingPage = () => {
    return (
        <>
            <div className="center">
                <Container style={{ width: "auto" }}>
                    <Row>
                        <Col lg={7} md={12}>
                            <h1 className="title">Harry</h1>
                            <h1 className="title">McGoldrick</h1>
                            <img
                                src="./YellowBreak.png"
                            ></img>
                            <div style={{ marginTop: 16 }}>
                                <h2 className="subtitle">Full-Stack Web Developer</h2>
                                <h2 className="subtitle">Hobbyist Game Developer </h2>
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <Image fluid
                                className="avatar"
                                src="./Placeholder.png"
                            ></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom">
                <img
                    src="ScrollDown.png"
                    className="scroll"
                ></img>
            </div>
        </>
    );
}