import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Galleries extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid fluid={true}>
                    <Row>
                        <Col md={3}>
                                <h3>Engagement</h3>
                                <Image src={require("./Senior_Packages.png")}/>
                        </Col>
                        <Col md={3}>
                                <h3>Couples</h3>
                                <Image src={require("./Event_Packages.png")}/>
                        </Col>
                        <Col md={3}>
                                <h3>Seniors</h3>
                                <Image src={require("./Package_Deal.png")}/>
                        </Col>
                        <Col md={3}>
                                <h3>Family</h3>
                                <Image src={require("./Wedding_Packages.png")}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}