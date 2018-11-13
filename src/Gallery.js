import React, { Component } from 'react';
import Header from './Header';
import Slider from 'react-slick';
import axios from 'axios';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.state = {
            galleries: [],
            width: 0,
        }

    }

    componentDidMount() {

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        axios.get('https://donna-photography-api.herokuapp.com/api/galleries')
            .then(res => {
                this.setState({galleries: res.data})
            })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
            autoplay: true,
            pauseOnHover: false,
            centerMode: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        infinite: true,
                        speed: 500,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        pauseOnHover: false,
                        variableWidth: false
                    },
                }
            ]
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
                </div>

            );
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
                            let width;

                            if(this.state.width < 500)
                            {
                                return (
                                    <div>
                                        <div>
                                        <div className="gallery-pic" style={{backgroundImage: `url("${gallery.image_url}")`}}></div>
                                        </div>
                                    </div>
                                );
                            }

                            if(gallery.orientation == "landscape")
                            {
                                width = '1066px';

                            }
                            else
                            {
                                width = '533px';

                            }

                            return (
                                <div>
                                    <div>
                                    <div className="gallery-pic" style={{backgroundImage: `url("${gallery.image_url}")`, width: width}}></div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </Slider>
             
                </div>

            </div>
        );
    }
}