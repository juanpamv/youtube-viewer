import React from 'react';
import { Spinner } from 'reactstrap';
import SearchBar from '../components/SearchBar/SearchBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';

// This key totally not should be here, should be moved to a .env file and handled from there
// this was commited just for excercise testing
const API_KEY = '';

/**
 * Container for video data in Home Page
 * Fetch video data from Youtube API
 *
 */
class VideoContainer extends React.Component {
    state = {
        videos: [],
        loading: false
    }

    /**
     * Fetch video data from Youtube API
     * 
     * term to look for related videos on the API
     * @param {string} searchTerm 
     */
    getVideos = (searchTerm) => {
        // set loadin to display spinner
        this.setState({loading: true})

        // fetch Data
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&fields=items(id%2C%20snippet(title%2C%20description%2C%20thumbnails(medium)))&maxResults=20&order=viewCount&q=${searchTerm}&key=${API_KEY}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
            credentials: "include",
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => {
            if (res.error === undefined){
                this.setState({
                    loading: false,
                })
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <SearchBar videos={this.state.videos} getVideos={this.getVideos}  />
                {
                    this.state.loading? 
                        <Spinner color="primary" /> 
                    : 
                        <VideoGrid videos={this.state.videos} />
                }
            </React.Fragment>
        )
    }
}



export default VideoContainer;