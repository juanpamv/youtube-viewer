import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.scss';

class Header extends React.Component {
    state = {
        collapsed: true
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        }); 
    }
    
    render(){
        return (
            <header className="header">
                <Container fluid>
                    <Row>
                        <Col>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">CD Player</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Nav navbar>
                                <NavItem>
                                    <NavLink href="/video/id">Video</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/notFound">Not Found</NavLink>
                                </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Header;