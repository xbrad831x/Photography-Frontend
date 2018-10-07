import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Investments extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <Grid fluid={true}>
                    <Row>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer'}} onClick={() => this.props.history.push("/Contact")} src={require("./Senior_Packages.png")} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer'}} onClick={() => this.props.history.push("/Contact")} src={require("./Event_Packages.png")} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer'}} onClick={() => this.props.history.push("/Contact")} src={require("./Package_Deal.png")} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer'}} onClick={() => this.props.history.push("/Contact")} src={require("./Wedding_Packages.png")} responsive/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}