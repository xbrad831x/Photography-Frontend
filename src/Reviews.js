import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'react-slick';
import Footer from './Footer';

export default class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/reviews')
            .then(res => {
                this.setState({reviews: res.data})
            })
    }

    render() {

        const settingsPictures = {
            dots: false,
            infinite: true,
            autoplaySpeed: 5000,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }

        if(this.state.reviews && this.state.reviews.length == 0)
        {
            return (
                <div>
                    <Header />

                    <div className="background-container">
                    <h1 className="stella-font text-center">reviews</h1>
                    <div>Loading...</div>
                    </div>

                    <Footer />
                </div>
            )
        }

        return (
            <div>
                
                <Header />

                <div className="background-container">
                    
                <h1 className="stella-font text-center">reviews</h1>

                <div className="slider-review-container">
                    <Grid>
                        <Row>
                        <Col sm={3} md={2}>
                        </Col>
                        <Col sm={6} md={8}>
                        <Slider {...settingsPictures}>
                            {this.state.reviews.map(review => {
                                return (
                                    <div>
                                        <img src={review.image_url} className="pic-review-container" />
                                        <div>
                                            <div style={{fontSize: 15}}>
                                                <b>"</b>{review.description}<b>"</b>
                                            </div>
                                            <div style={{fontSize: 20, marginBottom: 0}} className="pull-right">
                                            -{review.name}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                        </Col>
                        <Col sm={3} md={2}>
                        </Col>
                        </Row>
                    </Grid>
                </div>
                </div>

                <Footer />

            </div>
        )
    }
}