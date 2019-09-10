import React from "react";
import Hero from '../components/Hero/Hero';
import VideoGrid from '../components/VideoGrid/VideoGrid';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero title={"CD Player"} subTitle={"Creative Drive Player"}/>
                <VideoGrid />
            </React.Fragment>
        )
    }
}

export default Home;