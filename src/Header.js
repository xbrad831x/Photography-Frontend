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
          dropdownOpenInvestment: false,
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
        <div className="nav-container">
            <Grid fluid={true} >
                 <Row style={{textAlign: 'center', marginTop: 20}}>
                    <Col md={2}>
                        <Image className="logo-pic" src={require("./pictures/Simplest_Logo.png")}/>
                    </Col>
                    <Col md={8}>
                        <div className="nav-middle" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="container">
                                <div className="row seven-cols" style={{fontSize: 12}}>
                                    <div className="col-md-1 home-link nav-items-container"><img className="arrow-header" src={require('./pictures/down_arrow.png')}></img><NavLink exact style={{color: 'black'}} to="/">HOME</NavLink></div>
                                    <div className="col-md-1 home-link nav-items-container"><img className="arrow-header" src={require('./pictures/down_arrow.png')}></img><NavLink exact style={{color: 'black'}} to="/About">ABOUT</NavLink></div>
                                    <div className="col-md-1 home-link nav-items-container">
                                    <img className="arrow-header" src={require('./pictures/down_arrow.png')}></img>
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
                                    <div className="col-md-1 home-link nav-items-container"><img className="arrow-header" src={require('./pictures/down_arrow.png')}></img><NavLink exact style={{color: 'black'}} to="/Reviews">REVIEWS</NavLink></div>
                                    <div className="col-md-1 home-link nav-items-container">
                                    <Dropdown className="gallery" isOpen={this.state.dropdownOpenInvestment} toggle={this.toggleInvestment}>
                                    <img className="arrow-header" src={require('./pictures/down_arrow.png')}></img>
                                        <DropdownToggle
                                        tag="div"
                                        onClick={this.toggleInvestment}
                                        data-toggle="dropdown"
                                        nav={true}
                                        >
                                        INVESTMENT
                                        </DropdownToggle>
                                        <DropdownMenu persist={true} className="menu-container">
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/Headshots">HEADSHOT PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/Seniors">SENIOR PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/Events">EVENT PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/Portraits">PORTRAIT/COUPLE/<br />MATERNITY/FAMILY PRICE</NavLink></div>
                                                <div><NavLink exact style={{color: 'black'}} to="/Investments/Weddings">WEDDING PRICE</NavLink></div>
                                        </DropdownMenu>
                                     </Dropdown>
                                    </div>
                                    <div className="col-md-1 home-link nav-items-container"><img className="arrow-header" src={require('./pictures/down_arrow.png')}></img><NavLink exact style={{color: 'black'}} to="/Contact">CONTACT</NavLink></div>
                                    <div className="col-md-1 home-link"><img className="arrow-header" src={require('./pictures/down_arrow.png')}></img><NavLink exact style={{color: 'black'}} to="/Blog">BLOG</NavLink></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="social-media-container">
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