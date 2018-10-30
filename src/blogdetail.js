import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Button, Image, Grid, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

export default class BlogDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog: {},
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        axios.get(`https://donna-photography-api.herokuapp.com/api/blogs/${this.state.id}`)
                .then(response => {
                    console.log(response.data);
                    this.setState({blog: response.data})
                })
                .catch(error => {
                    console.log(error)
                })
    }

    render() {

        if(this.state.blog.length == 0)
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
                    <div className="blog-detail-container text-center">
                        <h3>{this.state.blog.created_at}</h3>
                        <h3>{this.state.blog.title}</h3>
                        <Image style={{marginLeft: 'auto', marginRight: 'auto'}} src={require('./pictures/Shipping_divider.png')} responsive/>
                        <div className="blog-pic-container text-center">
                            <Grid style={{width: '100%'}}>
                                <Row>
                                    <Col md={4}>
                                        <div className="blog-image-container">
                                            <img className="pic-blog" src={this.state.blog.image_url} />
                                        </div>
                                     </Col>
                                    <Col md={8}>
                                        <p>{`${this.state.blog.description}`}</p>
                                        <br />
                                        <div>Check out their Online Gallery here:</div>
                                        <a style={{cursor: 'pointer'}} target="_blank" rel="noopener noreferrer" href={this.state.blog.passgallery_url}>{this.state.blog.passgallery_url}</a>
                                        <br />
                                        <NavLink to="/Blog"><Button bsSize="large" className="blog-button">BACK TO BLOG</Button></NavLink>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}