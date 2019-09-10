import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VideoCard from '../VideoCard/VideoCard';
import './videoGrid.scss'

const VideoGrid = () => {

    return <Container >
            <Row className="video-grid">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </Row>
        </Container>
}

export default VideoGrid;