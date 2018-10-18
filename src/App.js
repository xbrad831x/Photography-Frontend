import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './Header';
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
              <img src={require("./pictures/home_pic_2.jpg")} />
              <img src={require("./pictures/home_pic_1.jpg")} />
          </Slider>
          <div style={{marginTop: 20, marginBottom: 20}} className="text-center">
            <img style={{height: 50, width: 50, cursor: 'pointer', marginRight: 50}} src={require("./pictures/left_arrow.png")}  onClick={this.previous}/>
            <img style={{height: 50, width: 50, cursor: 'pointer'}} src={require("./pictures/right_arrow.png")}  onClick={this.next}/>
          </div>
        </div>
        <h3 className="text-center">DONNA CHOEUN PHOTOGRAPHY</h3>
      </div>

    );
  }
}

export default App;
