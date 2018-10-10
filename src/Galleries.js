import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Galleries extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid fluid={true} style={{marginTop: 10}}>
                    <Row>
                        <Col md={3} style={{textAlign: 'center'}}>
                            <div className="picture-container">
                                <Image className="picture" src={require("./engagement.jpg")} responsive={true}/>
                                <h3>ENGAGEMENT</h3>
                            </div>
                        </Col>
                        <Col md={3} style={{textAlign: 'center'}}>
                            <div className="picture-container">
                                <Image className="picture" src={require("./couples.jpg")} responsive={true}/>
                                <h3>COUPLES</h3>
                            </div>
                        </Col>
                        <Col md={3} style={{textAlign: 'center'}}>
                            <div className="picture-container">
                                <Image className="picture" src={require("./senior.jpg")} responsive={true}/>
                                <h3>SENIORS</h3>
                            </div>
                        </Col>
                        <Col md={3} style={{textAlign: 'center'}}>
                            <div className="picture-container">
                                <Image className="picture" src={require("./family.jpg")} responsive={true}/>
                                <h3>FAMILY</h3>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}