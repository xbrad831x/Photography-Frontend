import React, { Component } from 'react';
import Header from './Header';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            about: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/about')
                .then(response => {

                    this.setState({about: response.data})
                })
                .catch(error => {
                    console.log(error)
                })
    }

    render() {

        if(this.state.about.length == 0)
        {
            return (
                <div>
                    <Header />
                    <div className="background-container">
                    <div>Loading...</div>
                    </div>
                </div>

            );
        }

        return (
            <div>
                <Header />

                <div className="background-container">
                    <Grid className="about-container">
                        <Row>
                            <Col md={4}>
                                <Image src={require("./pictures/About_pic.jpg")} 
                                        className="about-pic"
                                        responsive={true}/>
                            </Col>
                            <Col md={8}>
                                <br />
                                <div className="about-container-text">
                                <p>
                                {`${this.state.about[0].description}`}
                                </p>
                                <div><NavLink exact to="/Contact">Contact me</NavLink> for your next photo session!</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}