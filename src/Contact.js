import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormControl, FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeHowDidYouHear = this.onChangeHowDidYouHear.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            howdidyouhear: '',
            comment: ''
        }

    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value})
    }

    onChangeHowDidYouHear(e) {
        this.setState({howdidyouhear: e.target.value})
    }

    onChangeComment(e) {
        this.setState({comment: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let data = {name: this.state.name, email: this.state.email, howdidyouhear: this.state.howdidyouhear, comment: this.state.comment}

        axios.post(
            "https://donna-photography-api.herokuapp.com/api/sendemail", 
            {data})

        this.setState({name: '', email: '', howdidyouhear: '', comment: ''})

    }

    render() {
        return (
            <div>

                <Header />

                <div className="background-container" style={{alignItems: 'center'}}>

                <h1 className="stella-font text-center">contact</h1>

                <Grid>
                    <Row>
                        <Col md={6}>
                            <img style={{width: '100%', float: 'right'}} src={require('./pictures/contact_pic.jpg')} />
                        </Col>
                        <Col md={6}>
                        <Form onSubmit={this.handleSubmit} className="contact-container">
                            <FormGroup>
                                <ControlLabel>Name:</ControlLabel>
                                <FormControl
                                    onChange={this.onChangeName}
                                    value={this.state.name}
                                />
                                <ControlLabel>Email:</ControlLabel>
                                <FormControl
                                    onChange={this.onChangeEmail}
                                    value={this.state.email}
                                />
                                <ControlLabel>How did you hear about me:</ControlLabel>
                                <FormControl
                                    onChange={this.onChangeHowDidYouHear}
                                    value={this.state.howdidyouhear}
                                />
                                <ControlLabel>Comment:</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    rows={7}
                                    onChange={this.onChangeComment}
                                    value={this.state.comment}
                                />
                            </FormGroup>

                            <Button type="submit">Submit</Button>
                        </Form>
                        </Col>
                    </Row>
                </Grid>
                </div>

                <Footer />

            </div>
        );
    }
}