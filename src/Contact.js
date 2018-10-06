import React, { Component } from 'react';
import Header from './Header';
import { Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (
            <div style={{alignItems: 'center'}}>
                <Header />
                
                <Form style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl

                        />
                        <ControlLabel>Email</ControlLabel>
                        <FormControl

                        />
                        <ControlLabel>Phone</ControlLabel>
                        <FormControl

                        />
                        <ControlLabel>Message</ControlLabel>
                        <FormControl
                            
                        />
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}