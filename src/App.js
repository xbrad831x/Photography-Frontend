import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from './Header';
import { Col, Row, Grid } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        reviews: []
    }
}

componentDidMount() {
  axios.get('https://donna-photography-api.herokuapp.com/api/reviews')
          .then(response => {

              this.setState({reviews: response.data})
          })
          .catch(error => {
              console.log(error)
          })
}

  render() {

    if(this.state.reviews && this.state.reviews.length == 0)
    {
      return <div>Loading...</div>
    }

    const settingsPictures = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      slide: 'img',
    }

    const settingsReviews = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      slide: 'div'
    }

    return (
      <div>
        <Header />

        <Grid style={{marginBottom: 40, marginTop: 10}}>
          <Row>
              <Col md={1}>
              </Col>
              <Col md={10}>
                <Slider {...settingsPictures}>
                    <img src={require("./cat1.jpg")} />
                    <img src={require("./cat2.jpg")} />
                    <img src={require("./dog1.jpg")} />
                    <img src={require("./dog2.jpg")} />
                    <img src={require("./dog3.jpg")} />
                </Slider>
              </Col>
              <Col md={1}>
              </Col>
          </Row>
        </Grid>

        <Grid style={{marginBottom: 40, marginTop: 10}}>
          <Row>
            <Col md={2}>
            </Col>
            <Col md={8}>
              <Slider className="review-slider" {...settingsReviews}>
                    {this.state.reviews.map(review => {
                      return (
                        <div>
                          <div className="text-center">
                            "{review.description}"
                          </div>
                          <div className="text-right">
                            - {review.name}
                          </div>
                        </div>
                      );
                    })}
              </Slider>
            </Col>
            <Col md={2}>
            </Col>
          </Row>
        </Grid>

        <div className="text-center">
          <div>
            Follow me on Social Media:
          <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/donnacphotography"><img style={{height: 30, width:30, marginLeft: 20}} src={require("./F_Logo_Online_09_2018/Black/PNG/flogo-RGB-HEX-Blk-58.png")} /></a>
          <a target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/donnachoeun"><img style={{height: 30, width:30, marginLeft: 20}} src={require("./GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png")}/></a>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
