import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';

const Footer = () => {

    return <footer className="footer">
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <p>2019 CD PLAYER a Creative Drive Player. All Rights reserved.</p>
                    </Col>
                </Row>
            </Container>
    </footer>
}

export default Footer;