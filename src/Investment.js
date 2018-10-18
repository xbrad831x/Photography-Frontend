import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';

export default class Investments extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

            <Header />

            <div className="background-container text-center">
                <h1 className="stella-font">investments</h1>
                <h4>{this.props.match.params.investment}</h4>
            </div>

            </div>
        );
    }
}