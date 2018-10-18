import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (
            <div>

                <Header />

                <div className="background-container" style={{alignItems: 'center'}}>
                    
                    <Form style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
                        <FormGroup>
                            <ControlLabel>Name:</ControlLabel>
                            <FormControl

                            />
                            <ControlLabel>Email:</ControlLabel>
                            <FormControl

                            />
                            <ControlLabel>How did you hear about me:</ControlLabel>
                            <FormControl

                            />
                            <ControlLabel>Comment:</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                rows={7}
                            />
                        </FormGroup>

                        <Button type="submit">Submit</Button>
                    </Form>
                </div>

            </div>
        );
    }
}