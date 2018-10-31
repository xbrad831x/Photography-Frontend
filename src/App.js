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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      homepics: [],
      width: 0
  }
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);

  axios.get('https://donna-photography-api.herokuapp.com/api/homepics')
      .then(res => {
          this.setState({homepics: res.data})
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
                          if(this.props.match.params.gallery.toLowerCase() == homepic.gallery)
                          {
                              let width;
  
                              if(this.state.width < 500)
                              {
                                  return (
                                      <div>
                                          <div>
                                          <div className="gallery-pic" style={{backgroundImage: `url("${homepic.image_url}")`}}></div>
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
                                      <div className="gallery-pic" style={{backgroundImage: `url("${homepic.image_url}")`, width: width}}></div>
                                      </div>
                                  </div>
                              );
                          }
                    })}
          </Slider>
        </div>
        
        <Footer />

      </div>

    );
  }
}

export default App;
