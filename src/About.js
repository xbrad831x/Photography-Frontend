import React, { Component } from 'react';
import Header from './Header';
import { Image } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Image src={require("./About_pic.jpg")} 
                        style={{height: '25%', width: '25%', float: 'left', marginRight: 10, position: 'relative'}} 
                        circle={true} 
                        responsive={true}/>
                <p style={{fontSize: 30, fontFamily: 'Century Gothic'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis elementum est ac consequat. Nunc pulvinar enim velit, quis finibus erat aliquet ut. Curabitur posuere dolor ac nulla fermentum, eu ultrices quam elementum. Vestibulum a pellentesque dolor. Ut eros ex, laoreet non urna et, posuere pulvinar quam. Duis sit amet auctor erat. Morbi in lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non leo tincidunt, ullamcorper velit in, scelerisque nibh. Praesent cursus arcu ut condimentum commodo. Praesent enim velit, feugiat vel nunc eget, eleifend malesuada nunc. Nunc lobortis elementum eros, consectetur pulvinar metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Nulla sed nunc massa. Etiam a efficitur turpis. Curabitur commodo pellentesque tellus, euismod bibendum leo tincidunt quis. Aliquam nec ligula pulvinar, finibus ipsum id, tristique sapien. Fusce varius in quam et ultrices. Sed non ante eget velit porta commodo et in velit. Donec in varius nisl. Duis finibus fermentum sapien in malesuada. Quisque non magna placerat, varius nulla id, interdum sapien. Maecenas non urna maximus, ullamcorper nulla a, mollis urna. Nunc mollis, erat rutrum aliquet porttitor, odio metus ullamcorper eros, non elementum magna metus et odio. Phasellus nec quam quis est vulputate fermentum id id orci. Phasellus in elit ac orci interdum semper ut in nulla. Nam at porttitor arcu, et suscipit neque.
                </p>
            </div>
        );
    }
}