import React, { Component } from 'react';
import Header from './Header';
import Slider from 'react-slick';
import Footer from './Footer';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = {
            galleries: []
        }

    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/galleries')
            .then(res => {
                this.setState({galleries: res.data})
            })
    }

    next() {
        this.slider.slickNext();
      }
    
    previous() {
        this.slider.slickPrev();
      }


    render() {

        const settingsPictures = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            pauseOnHover: false
          }

        if(this.state.galleries.length == 0)
        {
            return (
                <div>
                    <Header />
                    <div className="background-container">
                    <h1 className="stella-font text-center">{this.props.match.params.gallery.toLowerCase()}</h1>
                    <div>Loading...</div>
                    </div>
                    <Footer />

                </div>

            );
        }

        return (
            <div>
                <Header />
                <div className="background-container">
                <h1 className="stella-font text-center">{this.props.match.params.gallery.toLowerCase()}</h1>
                <Grid>
                    <Row>
                        <Col md={2}>
                        </Col>
                        <Col md={8}>
                <Slider className="gallery-slider-container" {...settingsPictures} ref={slider => (this.slider = slider)}>
                    {this.state.galleries.map(gallery => {
                        if(this.props.match.params.gallery.toLowerCase() == gallery.gallery)
                        {
                            return (
                                <div>
                                    <div>
                                        <div className="gallery-pic" style={{backgroundImage: `url("${gallery.image_url}")`}}></div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </Slider>
                </Col>
                <Col md={2}>
                </Col>
                    </Row>
                </Grid>
                </div>
                
                <Footer />


            </div>
        );
    }
}