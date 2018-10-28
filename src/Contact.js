import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormControl, FormGroup, ControlLabel, Grid, Row, Col, HelpBlock } from 'react-bootstrap';
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
            comment: '',
            isNameValid: false,
            isEmailValid: false,
            isHearValid: false,
            isCommentValid: false,
            nameState: null,
            emailState: null,
            hearState: null,
            commentState: null
        }

    }

    onChangeName(e) {
        this.setState({name: e.target.value, isNameValid: false, nameState: null})
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value, isEmailValid: false, emailState: null})
    }

    onChangeHowDidYouHear(e) {
        this.setState({howdidyouhear: e.target.value, isHearValid: false, hearState: null})
    }

    onChangeComment(e) {
        this.setState({comment: e.target.value, isCommentValid: false, commentState: null})
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.name.length == 0)
        {
            this.setState({isNameValid: true, nameState: 'error'})
            return;
        }
        else if(this.state.email.length == 0)
        {
            this.setState({isEmailValid: true, emailState: 'error'})
            return;
        }
        else if(this.state.howdidyouhear.length == 0)
        {
            this.setState({isHearValid: true, hearState: 'error'})
            return;
        }
        else if(this.state.comment.length == 0)
        {
            this.setState({isCommentValid: true, commentState: 'error'})
            return;
        }

        let data = {name: this.state.name, email: this.state.email, howdidyouhear: this.state.howdidyouhear, comment: this.state.comment}

        axios.post(
            "https://donna-photography-api.herokuapp.com/api/sendemail", 
            {data})

        this.setState({name: '', email: '', howdidyouhear: '', comment: '', isNameValid: false, isEmailValid: false, 
                        isHearValid: false, isCommentValid: false, nameState: null, emailState: null, hearState: null, commentState: null})

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
                                <FormGroup validationState={this.state.nameState}>
                                    <ControlLabel>Name:</ControlLabel>
                                    <FormControl
                                        onChange={this.onChangeName}
                                        value={this.state.name}
                                    />
                                    {this.state.isNameValid && <HelpBlock>Name is blank.</HelpBlock>}
                                </FormGroup>
                                <FormGroup validationState={this.state.emailState}>
                                    <ControlLabel>Email:</ControlLabel>
                                    <FormControl
                                        onChange={this.onChangeEmail}
                                        value={this.state.email}
                                    />
                                    {this.state.isEmailValid && <HelpBlock>Email is blank.</HelpBlock>}
                                </FormGroup>
                                <FormGroup validationState={this.state.hearState}>
                                    <ControlLabel>How did you hear about me:</ControlLabel>
                                    <FormControl
                                        onChange={this.onChangeHowDidYouHear}
                                        value={this.state.howdidyouhear}
                                    />
                                    {this.state.isHearValid && <HelpBlock>Nothing entered.</HelpBlock>}
                                </FormGroup>
                                <FormGroup validationState={this.state.commentState}>
                                    <ControlLabel>Comment:</ControlLabel>
                                    <FormControl
                                        componentClass="textarea"
                                        rows={7}
                                        onChange={this.onChangeComment}
                                        value={this.state.comment}
                                    />
                                    {this.state.isCommentValid && <HelpBlock>Comment is blank.</HelpBlock>}
                                </FormGroup>
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