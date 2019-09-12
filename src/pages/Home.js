import React from "react";
import Hero from '../components/Hero/Hero';
import VideoContainer  from '../components/VideoContainer';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero title={"CD Player"} subTitle={"Creative Drive Player"}/>
                <VideoContainer />
            </React.Fragment>
        )
    }
}

export default Home;