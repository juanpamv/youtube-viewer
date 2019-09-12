import React from "react";
import { Container, Row, Col,ListGroup } from 'reactstrap';
import Hero from '../components/Hero/Hero';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Comment from '../components/Comment/Comment';
import Statistics from "../components/Statistics/Statistics";

// This key totally not should be here, should be moved to a .env file and handled from there
// this was commited just for excercise testing
const API_KEY = 'AIzaSyD7vaPIWMA_inrh-GARM_Qv8k0HyqtyRuE';

/**
 * Container for video page
 * Fetch video data from Youtube API
 *
 */
class Video extends React.Component{
    state = {
        loading: false,
        video: "",
        comments: []
    }

    /**
     * mount video and comments data to state
     * fetch data from Youtube API
     */
    componentDidMount = () => {
        // video ID data taken from url paramether
        const videoID = this.props.match.params.videoId;
        this.getVideoData(videoID);
        this.getComments(videoID);
    }

    /**
     * Fetch video data from Youtube API
     * 
     * video identifier
     * @param {string} videoId 
     */
    getVideoData = async (videoId) => {
        await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet%2C%20player&fields=items(player(embedHtml)%2Cid%2C%20snippet(title%2C%20description%2C%20thumbnails(medium))%2C%20statistics(dislikeCount%2C%20likeCount%2C%20viewCount))&id=${videoId}&maxResults=10&key=${API_KEY}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
            credentials: "include",
        }).then(res => res.json())
        .then(res => {
            this.setState({
                video: res.items[0]
            })
        })
    }

     /**
     * Fetch comments data from Youtube API
     * 
     * video identifier
     * @param {string} videoId 
     */
    getComments = async (videoId) => {
        await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&order=time&videoId=${videoId}&key=${API_KEY}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
            credentials: "include",
        }).then(res => res.json())
        .then(res => {
            this.setState({
                loading: true,
                comments: res.items
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Hero title={"CD Player"} subTitle={this.state.video? this.state.video.snippet.title: ""}/>
                <VideoPlayer 
                    iframe={this.state.video? this.state.video.player.embedHtml: ""} 
                    title={this.state.video? this.state.video.snippet.title: ""} 
                    description={this.state.video? this.state.video.snippet.description: ""}
                /> 
                <Container >
                    <Row className="video-grid">
                        <Col md={8}>
                            <Statistics 
                                statistics={this.state.video?this.state.video.statistics:""}
                            />
                            <h3>Comments:</h3>
                            <ListGroup>
                                {
                                    this.state.comments.map((comment, key) => {
                                        return <Comment
                                                key={key} 
                                                img={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                                                name={comment.snippet.topLevelComment.snippet.authorDisplayName}
                                                comment={comment.snippet.topLevelComment.snippet.textOriginal}
                                            />
                                    })
                                } 
                            </ListGroup>
                        </Col>
                    </Row>   
                </Container>             
            </React.Fragment>
        )
    }
}

export default Video;