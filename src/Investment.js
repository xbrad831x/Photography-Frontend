import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';

let Headshots, Seniors, Events, Portraits, Weddings;

export default class Investments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prices: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/prices')
                .then(response => {

                    this.setState({prices: response.data})
                })
                .catch(error => {
                    console.log(error)
                })
    }

    renderInvestment() {
        switch(this.props.match.params.investment) {
            case 'Headshots':
                return <Headshots />;
            case 'Seniors':
                return <Seniors />;
            case 'Events':
                return <Events />;
            case 'Portraits':
                return <Portraits />;
            case 'Weddings':
                return <Weddings />;
            default:
                return <div></div>;
        }
    }

    render() {

        if(this.state.prices.length == 0)
        {
            return (
                <div>
                    <Header />
                    <div className="background-container">
                    <div>Loading...</div>
                    </div>
                    <Footer />

                </div>

            );
        }

         Headshots = () => (
            <div className="text-center">
                <div>1-3 Digital Images</div>
                <div>Online Gallery</div>
                <div><b>${this.state.prices[0].headshots}</b>/Person</div>
                <br />
                <div><i>*For Businesses*</i></div>
            </div>
        );
        
         Seniors = () => (
            <div className="text-center">
                <div>30 Minute Session</div>
                <div>10 Digital Images</div>
                <div>(minimum)</div>
                <div>Online Gallery</div>
                <br />
                <div><b>${this.state.prices[0].seniors}</b></div>
            </div>
        );
        
         Events = () => (
            <div>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package One</b></div>
                                <br />
                                <div>Event Coverage</div>
                                <div>1-2 hour(s)</div>
                                <div>Online Gallery</div>
                                <div>1 Photographer</div>
                                <br />
                                <div><b>${this.state.prices[0].eventPackageOne}</b></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package Two</b></div>
                                <br />
                                <div>Event Coverage</div>
                                <div>3-4 hour(s)</div>
                                <div>Online Gallery</div>
                                <div>1 Photographer</div>
                                <br />
                                <div><b>${this.state.prices[0].eventPackageTwo}</b></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package Three</b></div>
                                <br />
                                <div>Event Coverage</div>
                                <div>5-6 hour(s)</div>
                                <div>Online Gallery</div>
                                <div>1 Photographer</div>
                                <br />
                                <div><b>${this.state.prices[0].eventPackageThree}</b></div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <br />
                <br />
                <h5><b>*QUANTITY OF DIGITAL IMAGES VARY PER EVENT | PRICE VARIES PER TRAVEL*</b></h5>
            </div>
        
        );
        
         Portraits = () => (
            <Grid>
                <Row>
                    <Col md={4}>
                        <div className="indiv-investment text-center">
                            <div><b>Package One</b></div>
                            <br />
                            <div>1 Person</div>
                            <div>25 Minute Session</div>
                            <div>15 Digital Images</div>
                            <div>(minimum)</div>
                            <div>Online Gallery</div>
                            <br />
                            <div><b>${this.state.prices[0].portraitsPackageOne}</b></div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="indiv-investment text-center">
                            <div><b>Package Two</b></div>
                            <br />
                            <div>1-3 Person(s)</div>
                            <div>45 Minute Session</div>
                            <div>25 Digital Images</div>
                            <div>(minimum)</div>
                            <div>Online Gallery</div>
                            <br />
                            <div><b>${this.state.prices[0].portraitsPackageTwo}</b></div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="indiv-investment text-center">
                            <div><b>Package Three</b></div>
                            <br />
                            <div>1-6 Person(s)</div>
                            <div>1 Hour Session</div>
                            <div>35 Digital Images</div>
                            <div>(minimum)</div>
                            <div>Online Gallery</div>
                            <br />
                            <div><b>${this.state.prices[0].portraitsPackageThree}</b></div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
        
         Weddings = () => (
            <div>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package One</b></div>
                                <br />
                                <div>Ceremony Coverage &</div>
                                <div>Portraits</div>
                                <div>60 Digital Images</div>
                                <div>(minimum)</div>
                                <div>1 Photographer</div>
                                <br />
                                <br />
                                <div><b>${this.state.prices[0].weddingsPackageOne}</b></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package Two</b></div>
                                <br />
                                <div>Pre-Wedding Coverage &</div>
                                <div>Ceremony Coverage &</div>
                                <div>Portraits</div>
                                <div>75 Digital Images</div>
                                <div>(minimum)</div>
                                <div>1 Photographer</div>
                                <br />
                                <div><b>${this.state.prices[0].weddingsPackageTwo}</b></div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="indiv-investment text-center">
                                <div><b>Package Three</b></div>
                                <br />
                                <div>ALL DAY COVERAGE</div>
                                <div>All Digital Images</div>
                                <div>1 Photographer</div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div><b>${this.state.prices[0].weddingsPackageThree}</b></div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <br />
                <br />
                <h5><b>*ALL PACKAGES INCLUDE ONLINE GALLERY + PRICE VARIES FOR TRAVEL*</b></h5>
            </div>
        );

        return (
            <div>

            <Header />

            <div className="background-container text-center">
                <h1 className="stella-font">investments</h1>
                <h4>{this.props.match.params.investment.toUpperCase()}</h4>
                <br />
                <br />
                <div className="investment-container">{this.renderInvestment()}</div>
            </div>
            
            <Footer />

            </div>
        );
    }
}