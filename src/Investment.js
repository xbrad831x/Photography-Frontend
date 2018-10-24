import React, { Component } from 'react';
import Header from './Header';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Footer from './Footer';

let Headshots = () => (
    <div className="text-center">
        <div>1-3 Digital Images</div>
        <div>Online Gallery</div>
        <div><b>$25</b>/Person</div>
        <br />
        <div><i>*For Businesses*</i></div>
    </div>
);

let Seniors = () => (
    <div className="text-center">
        <div>30 Minute Session</div>
        <div>10 Digital Images</div>
        <div>(minimum)</div>
        <div>Online Gallery</div>
        <br />
        <div><b>$50</b></div>
    </div>
);

let Events = () => (
    <div>
        <Grid>
            <Row>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package One</b></div>
                        <br />
                        <div>Event Coverage</div>
                        <div>1-2 hour(s)</div>
                        <div>Online Gallery</div>
                        <div>1 Photographer</div>
                        <br />
                        <div><b>$400</b></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package Two</b></div>
                        <br />
                        <div>Event Coverage</div>
                        <div>3-4 hour(s)</div>
                        <div>Online Gallery</div>
                        <div>1 Photographer</div>
                        <br />
                        <div><b>$500</b></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package Three</b></div>
                        <br />
                        <div>Event Coverage</div>
                        <div>5-6 hour(s)</div>
                        <div>Online Gallery</div>
                        <div>1 Photographer</div>
                        <br />
                        <div><b>$600</b></div>
                    </div>
                </Col>
            </Row>
        </Grid>
        <br />
        <br />
        <h5><b>*QUANTITY OF DIGITAL IMAGES VARY PER EVENT | PRICE VARIES PER TRAVEL*</b></h5>
    </div>

);

let Portraits = () => (
    <Grid>
        <Row>
            <Col md={4}>
                <div className="text-center">
                    <div><b>Package One</b></div>
                    <br />
                    <div>1 Person</div>
                    <div>25 Minute Session</div>
                    <div>15 Digital Images</div>
                    <div>(minimum)</div>
                    <div>Online Gallery</div>
                    <br />
                    <div><b>$150</b></div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center">
                    <div><b>Package Two</b></div>
                    <br />
                    <div>1-3 Person(s)</div>
                    <div>45 Minute Session</div>
                    <div>25 Digital Images</div>
                    <div>(minimum)</div>
                    <div>Online Gallery</div>
                    <br />
                    <div><b>$250</b></div>
                </div>
            </Col>
            <Col md={4}>
                <div className="text-center">
                    <div><b>Package Three</b></div>
                    <br />
                    <div>1-6 Person(s)</div>
                    <div>1 Hour Session</div>
                    <div>35 Digital Images</div>
                    <div>(minimum)</div>
                    <div>Online Gallery</div>
                    <br />
                    <div><b>$375</b></div>
                </div>
            </Col>
        </Row>
    </Grid>
);

let Weddings = () => (
    <div>
        <Grid>
            <Row>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package One</b></div>
                        <br />
                        <div>Ceremony Coverage &</div>
                        <div>Portraits</div>
                        <div>60 Digital Images</div>
                        <div>(minimum)</div>
                        <div>1 Photographer</div>
                        <br />
                        <br />
                        <div><b>$600</b></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package Two</b></div>
                        <br />
                        <div>Pre-Wedding Coverage &</div>
                        <div>Ceremony Coverage &</div>
                        <div>Portraits</div>
                        <div>75 Digital Images</div>
                        <div>(minimum)</div>
                        <div>1 Photographer</div>
                        <br />
                        <div><b>$750</b></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <div><b>Package Three</b></div>
                        <br />
                        <div>ALL DAY COVERAGE</div>
                        <div>All Digital Images</div>
                        <div>1 Photographer</div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div><b>$1200</b></div>
                    </div>
                </Col>
            </Row>
        </Grid>
        <br />
        <br />
        <h5><b>*ALL PACKAGES INCLUDE ONLINE GALLERY + PRICE VARIES FOR TRAVEL*</b></h5>
    </div>
);


export default class Investments extends Component {
    constructor(props) {
        super(props);
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