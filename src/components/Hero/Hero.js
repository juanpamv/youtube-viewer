import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './hero.scss';

const Hero = (props) => {
    return <Container fluid className="hero">
        <Row>
            <Col className="hero__content">
                <h1 className="hero__title">{props.title}</h1>
                <h2 className="hero__sub-title">{props.subTitle}</h2>
                <Button color="primary"className="hero__button">Search for videos</Button>
            </Col>
        </Row>
    </Container>
}

export default Hero;