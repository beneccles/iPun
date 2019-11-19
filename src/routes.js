import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Lock from './components/Lock/Lock'
import Home from './components/Home/Home'
import Phone from './components/Phone/Phone'

export default (
    <Switch>
        <Route exact path="/" component={Lock} />
        <Route path="/home" component={Home} />
        <Route path="/phone" component={Phone} />
    </Switch>
)