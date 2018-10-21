import React, { Component } from 'react';
import Header from './Header';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="background-container">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <Image src={require("./pictures/About_pic.jpg")} 
                                        style={{   float: 'left', 
                                                margin: 20, position: 'relative',
                                                borderStyle: 'solid', borderColor: 'black', borderWidth: '2px'}} 
                                        responsive={true}/>
                            </Col>
                            <Col md={8}>
                                <p className="about-container">
                                {`
                                Thanks for visiting my site! I am a photographer in Stockton, California. I grew up in Stockton, but went to college in Chico at California State University Chico.

                                My vision to come back to Stockton was to help make a change in those who serve & live in this community. I believe you are not a product of your environment. So I am here to showcase the beauty Stockton has to offer through the photography that I do!

                                I am also available for travel if you are not in this area. 

                                My passion for photography began when my parents bought me my first polaroid camera back in the third grade. I would also take it everywhere with me capturing fieldtrips, family, pets and all things around me. I love the joy it brought me in capturing moments to relive over & over again.

                                I am a natural light photographer. I enjoy capturing the love between couples & families. It is my goal to make you feel happy & comfortable during your session.  
                                `}<br />
                                <br />
                                <div><NavLink exact to="/Contact">Contact me</NavLink> for your next photo session!</div>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <Footer />

            </div>
        );
    }
}