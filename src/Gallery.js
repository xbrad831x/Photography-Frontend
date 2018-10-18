import React, { Component } from 'react';
import Header from './Header';
import Slider from 'react-slick';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

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
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
          }

        return (
            <div>
                <Header />
                <div className="background-container">
                <Slider {...settingsPictures} ref={slider => (this.slider = slider)}>
                    <img src={require("./pictures/home_pic_2.jpg")} />
                    <img src={require("./pictures/home_pic_1.jpg")} />
                </Slider>
                </div>
                <h1>{this.props.match.params.gallery}</h1>
            </div>
        );
    }
}