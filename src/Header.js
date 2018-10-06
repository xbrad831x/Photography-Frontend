import React, { Component } from 'react';
import { Grid, Row, Col , Nav, Navbar, NavItem, Image} from 'react-bootstrap';
import { IndexLinkContainer ,LinkContainer } from 'react-router-bootstrap';
    

export default class Header extends Component {
    render() {
        return (
        <div>
            <div>
                <Image style={{marginLeft: 'auto', marginRight: 'auto'}} src={require("./Logo.png")} responsive/>
            </div>
            
            <Navbar>
                <Nav style={{width: '100%'}}>
                    <Grid>
                    <Row>
                    <Col md={2}>
                    <IndexLinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </IndexLinkContainer>
                    </Col>
                    <Col md={2}>
                    <LinkContainer to="/About">
                        <NavItem>About</NavItem>
                    </LinkContainer>
                    </Col>
                    <Col md={2}>
                    <LinkContainer to="/Galleries">
                        <NavItem>Galleries</NavItem>
                    </LinkContainer>
                    </Col>
                    <Col md={2}>
                    <LinkContainer to="/Investments">
                        <NavItem>Investments</NavItem>
                    </LinkContainer>
                    </Col>
                    <Col md={2}>
                    <LinkContainer to="/Contact">
                        <NavItem>Contact</NavItem>
                    </LinkContainer>
                    </Col>
                    <Col md={2}>
                    <LinkContainer to="/Blog">
                        <NavItem>Blog</NavItem>
                    </LinkContainer>
                    </Col>
                    </Row>
                    </Grid>
                </Nav>
            </Navbar>
        </div>
        );
    }
}