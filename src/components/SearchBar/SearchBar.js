import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import './searchBar.scss';

/**
 * Renders a search bat that make a request to YouTube API on every change od the value
 */
class SearchBar extends React.Component {
    state = {
        value: ""
    }

    //API call variable to prevent multiple Api calls
    APICall = ''

    /**
     * Update the value of the search-bar__input when user types
     * Update the videos state making a fecth to Youtube API
     *
     * @param {event} e
     */
    handleChange = (e) => {
        this.setState({value: e.target.value});

        //Clear API call if new change happens
        clearTimeout(this.APICall);

        //Add new API call
        this.APICall = setTimeout(() => {
            this.props.getVideos(this.state.value);
        }, 300);
    }
    
    
    /**
     * Update the videos state on submit making a fecth to Youtube API.
     *
     * @param {event} e
     */
    handleClick = () => {
        this.props.getVideos(this.state.value);
    }

    render(){
        return (
            <div className="search-bar">
                <Container fluid>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} md={8} lg={6} className="text-center">
                            <h2>Search for videos...</h2>
                            <InputGroup>
                                <Input className="search-bar__input" value={this.state.value} onChange={this.handleChange} />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary" className="search-bar__button" onClick={this.handleClick}>Search</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SearchBar;