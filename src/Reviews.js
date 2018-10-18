import React, { Component } from 'react';
import Header from './Header';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'react-slick';

export default class Review extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/reviews')
            .then(res => {
                this.setState({reviews: res.data})
            })
    }

    render() {

        if(this.state.reviews && this.state.reviews.length == 0)
        {
            return (
                <div>
                    <Header />

                    <div className="background-container">Loading...</div>
                </div>
            )
        }

        return (
            <div>
                
                <Header />

                <div className="background-container">
                    
                <h1 className="stella-font text-center">reviews</h1>
                    {this.state.reviews.map(review => {
                        return (
                            <div style={{height: 400}}>
                                <Image src={review.image_url} 
                                        style={{   float: 'left', maxHeight: '100%', 
                                                    marginRight: 20, position: 'relative',
                                                    borderStyle: 'solid', borderColor: 'black', borderWidth: '2px'}} 
                                                    responsive={true}/>
                                <p style={{fontSize: 20, wordWrap: 'break-word', margin: 20}}>
                                    <b>"</b>{review.description}<b>"</b>
                                </p>
                                <div style={{fontSize: 20}} className="pull-right">
                                -{review.name}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        )
    }
}