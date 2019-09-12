import React from 'react';
import { Spinner } from 'reactstrap';
import SearchBar from '../components/SearchBar/SearchBar';
import VideoGrid from '../components/VideoGrid/VideoGrid';


const API_KEY = 'AIzaSyD7vaPIWMA_inrh-GARM_Qv8k0HyqtyRuE';

class VideoContainer extends React.Component {
    state = {
        videos: [],
        loading: false
    }

    getVideos = (searchTerm) => {
        this.setState({loading: true})
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
            if (res.error == undefined){
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