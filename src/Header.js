import React, { Component } from 'react';
import { Grid, Row, Col ,Image } from 'react-bootstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleGallery = this.toggleGallery.bind(this);
        this.toggleInvestment = this.toggleInvestment.bind(this);
        this.state = {
          dropdownOpenGallery: false,
          dropdownOpenInvestment: false
        };
      }

      toggleGallery() {
        this.setState({
          dropdownOpenGallery: !this.state.dropdownOpenGallery
        });
      }

      toggleInvestment() {
        this.setState({
          dropdownOpenInvestment: !this.state.dropdownOpenInvestment
        });
      }

    render() {
        return (
        <div style={{marginTop: -40, marginBottom: -20}}>
            <Grid fluid={true} >
                 <Row style={{textAlign: 'center', marginTop: 20}}>
                    <Col md={3}>
                        <Image style={{height: 240, width: 600, marginLeft: 'auto', marginRight: 'auto'}} src={require("./pictures/Logo.png")} responsive/>
                    </Col>
                    <Col md={6} style={{height: 50, marginTop: 70, borderRightStyle: 'solid', borderRightColor: 'lightgray', borderRightWidth: '2px', 
                                        borderLeftStyle: 'solid', borderLeftColor: 'lightgray', borderLeftWidth: '2px'}}>
                        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="container">
                                <div className="row seven-cols" style={{fontSize: 12}}>
                                    <div style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}} className="col-md-1"><NavLink exact style={{color: 'black'}} to="/">HOME</NavLink></div>
                                    <div style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}} className="col-md-1"><NavLink exact style={{color: 'black'}} to="/About">ABOUT</NavLink></div>
                                    <div className="col-md-1" style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}}>
                                    <Dropdown className="gallery" isOpen={this.state.dropdownOpenGallery} toggle={this.toggleGallery}>
                                        <DropdownToggle
                                        tag="div"
                                        onClick={this.toggleGallery}
                                        data-toggle="dropdown"
                                        nav={true}
                                        >
                                        GALLERY
                                        </DropdownToggle>
                                        <DropdownMenu persist={true} className="menu-container">
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/HEADSHOTS">HEADSHOTS</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/SENIORS">SENIORS</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/EVENTS">EVENTS</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/MATERNITY">MATERNITY</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/COUPLES">COUPLES</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/ENGAGEMENTS">ENGAGEMENTS</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/galleries/WEDDINGS">WEDDINGS</NavLink></div>
                                        </DropdownMenu>
                                     </Dropdown>
                                    </div>
                                    <div style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}} className="col-md-1"><NavLink exact style={{color: 'black'}} to="/Reviews">REVIEWS</NavLink></div>
                                    <div style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}} className="col-md-1">
                                    <Dropdown className="gallery" isOpen={this.state.dropdownOpenInvestment} toggle={this.toggleInvestment}>
                                        <DropdownToggle
                                        tag="div"
                                        onClick={this.toggleInvestment}
                                        data-toggle="dropdown"
                                        nav={true}
                                        >
                                        INVESTMENT
                                        </DropdownToggle>
                                        <DropdownMenu persist={true} className="menu-container">
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/HEADSHOTS">HEADSHOTS PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/SENIORS">SENIORS PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/EVENTS">EVENTS PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/PORTRAITS">PORTRAIT/COUPLES/<br />MATERNITY/FAMILY PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/WEDDINGS">WEDDINGS PRICE</NavLink></div>
                                        </DropdownMenu>
                                     </Dropdown>
                                    </div>
                                    <div style={{borderRightColor: 'lightgray', borderRightStyle: 'solid', borderRightWidth: 2}} className="col-md-1"><NavLink exact style={{color: 'black'}} to="/Contact">CONTACT</NavLink></div>
                                    <div className="col-md-1"><NavLink exact style={{color: 'black'}} to="/Blog">BLOG</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} style={{height: 140, marginTop: 25}}>
                        <div style={{height: '100%', display: 'flex', alignItems: 'center', fontSize: 12 }}>
                            FOLLOW ALONG
                            <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/donnacphotography"><img style={{height: 20, width:20, marginLeft: 10}} src={require("./F_Logo_Online_09_2018/Black/PNG/flogo-RGB-HEX-Blk-58.png")} /></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.instagram.com/donnachoeun"><img style={{height: 20, width:20, marginLeft: 10}} src={require("./GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png")}/></a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}