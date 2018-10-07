import React, { Component } from 'react';
import { Grid, Row, Col ,Image} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
    
const styleNav = {
    position: 'relative',
    width: '100%',
    border: 2,
    borderStyle: 'solid',
    borderColor: '#aadbe6',
    paddingLeft: 0,
    paddingRight: 0
}

const active = {
    backgroundColor: '#aadbe6',
    display: 'block'
}

export default class Header extends Component {
    render() {
        return (
        <div>
            <div>
                <Image style={{height: '780px', width: '100%', marginBottom: -240, marginTop: -240 ,marginLeft: 'auto', marginRight: 'auto'}} src={require("./Logo.png")} responsive/>
            </div>
            
            <Grid style={styleNav}>
                 <Row style={{textAlign: 'center'}}>
                    <Col md={2}>
                        <NavLink exact activeStyle={active} to="/">Home</NavLink>
                    </Col>
                    <Col md={2}>
                        <NavLink activeStyle={active} to="/About">About</NavLink>
                    </Col>
                    <Col md={2}>
                    <   NavLink activeStyle={active} to="/Galleries">Galleries</NavLink>
                    </Col>
                    <Col md={2}>
                        <NavLink activeStyle={active} to="/Investments">Investments</NavLink>
                    </Col>
                    <Col md={2}>
                        <NavLink activeStyle={active} to="/Contact">Contact</NavLink>
                    </Col>
                    <Col md={2}>
                        <NavLink activeStyle={active} to="/Blog">Blog</NavLink>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}