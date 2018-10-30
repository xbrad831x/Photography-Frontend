import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

    this.state = {
      homepics: []
  }
}

componentDidMount() {
  axios.get('https://donna-photography-api.herokuapp.com/api/homepics')
      .then(res => {
          this.setState({homepics: res.data})
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
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      centerMode: true,
      variableHeight: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              centerMode: true,
              variableHeight: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              dots: false,
              infinite: true,
              speed: 500,
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              centerMode: true,
              variableHeight: true,
            }
          },
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
              centerMode: false,
              variableHeight: true,
            }
          }
        ]
    }

    if(this.state.homepics.length == 0)
        {
            return (
                <div>
                    <Header />
                    <div className="background-container">
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
           <Slider className="gallery-slider-container" {...settingsPictures} ref={slider => (this.slider = slider)}>
                      {this.state.homepics.map(homepic => {
                          return (
                            <div>
                            <div>
                                <div className="gallery-pic" style={{backgroundImage: `url("${homepic.image_url}")`}}></div>
                            </div>
                        </div>
                          );
                    })}
          </Slider>
        </div>
        
        <Footer />

      </div>

    );
  }
}

export default App;
