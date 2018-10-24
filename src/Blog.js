import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import Footer from './Footer';
import Slider from 'react-slick';

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
        axios.get('http://localhost:8000/api/blogs')
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
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
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
                <Slider className="gallery-slider-container" {...settingsPictures} ref={slider => (this.slider = slider)}>
                            {this.state.blogs.map(blog => {
                                return (
                                    <div>
                                        <div className="blog-pic-container text-center">
                                            <h2 className="blog-title"><b>{blog.title.toUpperCase()}</b></h2>
                                            <h2 className="blog-category"><b>{blog.category.toUpperCase()}</b></h2>
                                            <div className="blog-image-container">
                                                <img className="pic-blog" src={blog.image_url} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                </Slider>
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