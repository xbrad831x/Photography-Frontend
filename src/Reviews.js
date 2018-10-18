import React, { Component } from 'react';
import Header from './Header';
import { Image } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'react-slick';

const r = {
    "id": 4,
    "name": "Imee",
    "description": "Donna is an amazing person to work with! She made our session so light and fun and she allowed us to give our own input as well! Definitely recommend her to do your sessions! 🤗",
    "image_url": "https://az415828.vo.msecnd.net/pictures/8/963/8963717/lowres/322142163.jpg",
    "created_at": "2018-10-10T15:44:02.978661Z"
    }

export default class Review extends Component {

    state = {
        reviews: []
    }

    ComponetDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/reviews')
            .then(res => {
                this.setState({reviews: res.data})
            })
    }

    render() {

        if(this.state.reviews.length == 0)
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