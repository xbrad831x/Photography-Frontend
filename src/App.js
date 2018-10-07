import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './Header';

class App extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      slide: 'img'
    }

    return (
      <div>
        <Header />

        <div style={{marginBottom: 20, marginTop: 10}}>
          <Slider {...settings}>
              <img src={require("./cat1.jpg")} />
              <img src={require("./cat2.jpg")} />
              <img src={require("./dog1.jpg")} />
              <img src={require("./dog2.jpg")} />
              <img src={require("./dog3.jpg")} />
          </Slider>
        </div>

        <div className="text-center">
          <div>
            Follow me on Social Media:
          </div>
          <a target="_blank" href="http://www.facebook.com/donnacphotography"><img src={require(".//F_Logo_Online_09_2018/Color/PNG/flogo_RGB_HEX-72.png")} /></a>
          <a target="_blank" href="http://www.instagram.com/donnachoeun"><img style={{height: 72, width:72, marginLeft: 50}} src={require("./GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png")}/></a>
        </div>

      </div>

    );
  }
}

export default App;
