import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';

const Footer = () => {

    return <footer className="footer">
            <Container fluid>
                <Row>
                    <Col>
                        <h3>This is the Header</h3>
                    </Col>
                </Row>
            </Container>
    </footer>
}

export default Footer;