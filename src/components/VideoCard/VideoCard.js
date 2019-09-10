import React from 'react';
import { 
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button } from 'reactstrap';
import './videoCard.scss';

const VideoCard = (props) => {
  return (
    <Col xs={12} md={6} lg={4} className="video-card">
      <Card>
        <CardImg top width="100%" src="https://picsum.photos/200/100" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button className="video-card__button">Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VideoCard;