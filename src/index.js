import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gallery from './Gallery';
import Investment from './Investment';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import Review from './Reviews'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
<Router>
    <Switch>
        <Route path="/Blog" component={Blog}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Investments/:investment" component={Investment}/>
        <Route path="/Galleries/:gallery" component={Gallery}/>
        <Route path="/About" component={About}/>
        <Route path="/Reviews" component={Review} />
        <Route exact path="/" component={App} />
    </Switch>
</Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
