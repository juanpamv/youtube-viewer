import React from 'react';
import PropTypes from 'prop-types';
import { 
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";
import './videoCard.scss';

/**
 * Renders video information in a boostrap card component
 */
const VideoCard = (props) => {
  const video = props.video;
  return (
    <Col xs={12} md={6} lg={4} className="video-card">
      <Card>
        <CardImg top width="100%" src={video.snippet.thumbnails.medium.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{video.snippet.title}</CardTitle>
          <CardText>{video.snippet.description.slice(0, 50)+"..."}</CardText>
          <Link className="video-card__button w-100 btn btn-secondary" to={`/video/${video.id.videoId}`}>View Video</Link>
        </CardBody>
      </Card>
    </Col>
  );
};

VideoCard.propTypes = {
  /** video object comming from API, Data: snippet(title, description,thumbnails), id */
  video: PropTypes.object.isRequired,
};

export default VideoCard;