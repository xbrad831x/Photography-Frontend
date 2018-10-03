import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="text-center display-4">
            Donna Choeun <br />
             Photography 
        </p>

        <nav className="navbar navbar-expand-sm display-4 justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galleries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Investments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </nav>

        <div className="carousel slide" data-ride="carousel">
          <div className=" carousel-inner home_gallery">
            <div className="carousel-item active">
              <img src={require("./cat1.jpg")} />
            </div>
            <div className="carousel-item">
              <img src={require("./cat2.jpg")} />
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>

        <div className="text-center">
          <div className="display-4">
            Follow me on Social Media:
          </div>
          <a href="http://www.facebook.com/donnacphotography"><img src={require(".//F_Logo_Online_09_2018/Color/PNG/flogo_RGB_HEX-72.png")} /></a>
          <a href="http://www.instagram.com/donnachoeun"><img style={{height: 72, width:72, marginLeft: 50}} src={require("./GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png")}/></a>
        </div>

      </div>

    );
  }
}

export default App;
