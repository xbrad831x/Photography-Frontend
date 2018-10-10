import React, { Component } from 'react';
import Header from './Header';
import { Button, Card, CardActions, CardContent , CardHeader, CardMedia, CardActionArea} from '@material-ui/core'
import { Col, Grid, Row } from 'react-bootstrap';
import axios from 'axios';

export default class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get('https://donna-photography-api.herokuapp.com/api/blogs')
                .then(response => {

                    this.setState({blogs: response.data})
                })
                .catch(error => {
                    console.log(error)
                })
    }

    render() {
        if(this.state.blogs && this.state.blogs.length == 0)
        {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Header />
                <Grid fluid={true}>
                    <Row>
                        <Col md={4}>
                            <Card raised={true} style={{height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <CardHeader style={{textAlign: 'center'}} title={this.state.blogs[0].title} subheader={this.state.blogs[0].gallery}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    {this.state.blogs[0].description}
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button variant='outlined'>
                                        Read More...
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card raised={true} style={{height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <CardHeader style={{textAlign: 'center'}} title={this.state.blogs[1].title} subheader={this.state.blogs[1].gallery}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    {this.state.blogs[1].description}
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button variant='outlined'>
                                        Read More...
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card raised={true} style={{height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <CardHeader style={{textAlign: 'center'}} title={this.state.blogs[2].title} subheader={this.state.blogs[2].gallery}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    {this.state.blogs[2].description}
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button variant='outlined'>
                                        Read More...
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}