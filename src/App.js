import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Footer from './Footer';
class App extends Component {

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

export default App;
