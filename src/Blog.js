import React, { Component } from 'react';
import Header from './Header';
import { Button, Card, CardActions, CardContent , CardHeader, CardMedia, CardActionArea} from '@material-ui/core'
import { Col, Grid, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from './Footer';

export default class Blog extends Component {

    constructor(props) {
        super(props);

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

    render() {

        return (
            <div>
                <Header />
                
                <div className="background-container">

                </div>

                <Footer />
            </div>
        );
    }
}