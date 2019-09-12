import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.scss';

class Header extends React.Component {
    state = {
        collapsed: true,
        time: 0
    }

    time = ''

    componentDidMount = () => {
        this.setTime();

        this.time = setInterval(() => {
            this.setTime()
        }, 30000);
    }

    setTime = () => {
        const time = new Date().getHours() + " : "+ new Date().getMinutes();
        
        this.setState({
            time
        })
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
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <NavbarBrand href="/" className="mr-auto">CD Player</NavbarBrand>
                            <div>
                                {this.state.time}
                            </div>
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