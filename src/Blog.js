import React, { Component } from 'react';
import Header from './Header';
import { Button, Card, CardActions, CardContent , CardHeader, CardMedia, CardActionArea} from '@material-ui/core'
import { Col, Grid, Row } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid fluid={true}>
                    <Row>
                        <Col md={4}>
                            <Card raised={true} style={{height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <CardHeader style={{textAlign: 'center'}} title={'Title'} subheader={'Subheader'}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    This is the blog preview...
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
                                <CardHeader style={{textAlign: 'center'}} title={'Title'} subheader={'Subheader'}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    This is the blog preview...
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
                                <CardHeader style={{textAlign: 'center'}} title={'Title'} subheader={'Subheader'}/>
                                <CardActionArea style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                    <CardMedia 
                                        component='img'
                                        image={require('./cat1.jpg')}
                                    />
                                </CardActionArea>
                                <CardContent style={{textAlign: 'center'}}>
                                    This is the blog preview...
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