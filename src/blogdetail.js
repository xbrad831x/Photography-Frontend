import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

export default class BlogDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/blogs')
                .then(response => {

                    this.setState({blog: response.data})
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

            </div>
        );
    }
}