import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';

export const GlobalNavbar = () => {
    return (
        <Navbar class="navbar" sticky="top">
            <Container fluid>
                <Nav>
                    <Navbar.Brand class="navbar-brand">HMG</Navbar.Brand>
                </Nav>
                <span class="navbar-seperator"></span>
                <Nav>
                <Nav.Link class="navbar-link" href="https://www.linkedin.com/in/harrymcgoldrick/">
                        <img
                            src="/LinkedInLogo.png"
                            className="navbar-icon"
                        ></img>
                </Nav.Link>
                <Nav.Link class="navbar-link" href="https://github.com/HarryMcGoldrick">
                        <img
                            src="/GitHubLogo.png"
                            className="navbar-icon"
                        ></img>
                </Nav.Link>
                </Nav>
              
            </Container>
        </Navbar>
    );

};

