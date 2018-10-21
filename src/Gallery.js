import React, { Component } from 'react';
import Header from './Header';
import Slider from 'react-slick';
import Footer from './Footer';
import axios from 'axios';

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
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            slide: 'img'
          }

        if(this.state.galleries.length < 1)
        {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Header />
                <div className="background-container">
                <h1 className="stella-font text-center">{this.props.match.params.gallery.toLowerCase()}</h1>
                <Slider className="gallery-slider-container" {...settingsPictures} ref={slider => (this.slider = slider)}>
                    {this.state.galleries.map(gallery => {
                        if(this.props.match.params.gallery.toLowerCase() == gallery.gallery)
                        {
                            return (
                                <img className="pic-gallery" src={gallery.image_url} />
                            );
                        }
                    })}
                </Slider>
                <div className="text-center arrow-container">
                    <img style={{height: 50, width: 50, cursor: 'pointer', marginRight: 50}} src={require("./pictures/left_arrow.png")}  onClick={this.previous}/>
                    <img style={{height: 50, width: 50, cursor: 'pointer'}} src={require("./pictures/right_arrow.png")}  onClick={this.next}/>
                </div>
                </div>
                
                <Footer />


            </div>
        );
    }
}