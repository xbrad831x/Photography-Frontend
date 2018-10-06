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
                            <Image style={{cursor: 'pointer', height: '100%', width: '100%'}} onClick={() => this.props.history.push("/Contact")} src={require("./Senior_Packages.png")}/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer', height: '100%', width: '100%'}} onClick={() => this.props.history.push("/Contact")} src={require("./Event_Packages.png")}/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer', height: '100%', width: '100%'}} onClick={() => this.props.history.push("/Contact")} src={require("./Package_Deal.png")}/>
                        </Col>
                        <Col md={3}>
                            <Image style={{cursor: 'pointer', height: '100%', width: '100%'}} onClick={() => this.props.history.push("/Contact")} src={require("./Wedding_Packages.png")}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}