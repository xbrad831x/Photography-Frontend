import React, { Component } from 'react';
import Header from './Header';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

export default class Blog extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/blogs')
                .then(response => {

                    this.setState({blogs: response.data})
                })
                .catch(error => {
                    console.log(error)
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
            autoplaySpeed: 5000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }

          if(this.state.blogs.length == 0)
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
                <h1 className="stella-font text-center">blog</h1>
                <Grid>
                    <Row>
                        <Col md={1}>
                        </Col>
                        <Col md={10}>
                            <Slider className="gallery-slider-container" {...settingsPictures} ref={slider => (this.slider = slider)}>
                                        {this.state.blogs.map(blog => {
                                            return (
                                                <div>
                                                    <div className="blog-pic-container text-center">
                                                        <Grid style={{width: '100%'}}>
                                                            <Row>
                                                                <Col md={4}>
                                                                    <div className="blog-image-container">
                                                                        <img className="pic-blog" src={blog.image_url} />
                                                                    </div>
                                                                </Col>
                                                                <Col md={8}>
                                                                    <h2 className="blog-title"><b>{blog.title.toUpperCase()}</b></h2>
                                                                    <br />
                                                                    <p>{`${blog.description.slice(0,299)}...`}</p>
                                                                    <NavLink to={`blogs/${blog.id}`}><Button bsSize="large" className="blog-button" >READ MORE</Button></NavLink>
                                                                </Col>
                                                            </Row>
                                                        </Grid>
                                                    </div>
                                                </div>
                                            );
                                        })}
                            </Slider>
                        </Col>
                        <Col md={1}>
                        </Col>
                    </Row>
                </Grid>
                <div className="text-center arrow-container">
                <img style={{height: 50, width: 50, cursor: 'pointer', marginRight: 10}} src={require("./pictures/left_arrow.png")}  onClick={this.previous}/>
                <img style={{height: 50, width: 50, cursor: 'pointer'}} src={require("./pictures/right_arrow.png")}  onClick={this.next}/>
                </div>
            </div>

                <Footer />
            </div>
        );
    }
}