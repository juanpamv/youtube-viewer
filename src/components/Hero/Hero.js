import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import './hero.scss';

/**
 * Renders a Hero for every page, just provide title and subtitle
 */
const Hero = (props) => {
    return <Container fluid className="hero">
        <Row>
            <Col className="hero__content">
                <h1 className="hero__title">{props.title}</h1>
                <h2 className="hero__sub-title">{props.subTitle}</h2>
            </Col>
        </Row>
    </Container>
}

Hero.propTypes = {
    /** Title of the page, renders in an h1 */
    title: PropTypes.string.isRequired,
    /** sub title of the page, renders in an h2 */
    subTitle: PropTypes.string.isRequired
};

export default Hero;