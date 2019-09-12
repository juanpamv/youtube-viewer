import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Parser from 'html-react-parser';
import './videoPlayer.scss';

/**
 * Renders a Video player with video title and description
 */
const VideoPlayer = (props) => (
    <div className="video-player">
        <Container>
            <Row>
                <Col>
                    { 
                        // this needs to be parsed to render it properly since it is plain html
                        Parser(props.iframe) 
                    }
                    <h3 className="video-player__title">{props.title}</h3>
                    <p className="video-player__description">{props.description}</p>
                </Col>
            </Row>
        </Container >
    </div>
)

VideoPlayer.propTypes = {
    /** Title of the video from API */
    title: PropTypes.string,
    /** Description of the video from API */
    description: PropTypes.string,
    /** Iframe of the video provided API, needs to be parsed sin it is plain html */
    iframe: PropTypes.string,
};

export default VideoPlayer;