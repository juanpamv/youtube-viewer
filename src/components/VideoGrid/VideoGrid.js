import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './videoGrid.scss'

/**
 * Render and maps videos from the API
 */
const VideoGrid = (props) => (
    <React.Fragment>
        <Container >
            <Row className="video-grid">
                {
                    props.videos.map((video, key) => {
                        return <VideoCard key={key} video={video} />
                    }) 
                }
            </Row>
        </Container>
    </React.Fragment>
)


VideoGrid.propTypes = {
    /** Array of videos from API  */
    video: PropTypes.array,
};

export default VideoGrid;