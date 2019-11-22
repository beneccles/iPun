import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Lock from './components/Lock/Lock'
import Home from './components/Home/Home'
import Phone from './components/Phone/Phone'
import Keypad from './components/Phone/Keypad/Keypad'
import Contacts from './components/Phone/Contacts/Contacts'
import Favorites from './components/Phone/Favorites/Favorites'
import Recents from './components/Phone/Recents/Recents'
import Voicemail from './components/Phone/Voicemail/Voicemail'

export default (
    <Switch>
        <Route exact path="/" component={Lock} />
        <Route path="/home" component={Home} />
        <Route path="/phone" component={Phone} />
        <Route path="/keypad" component={Keypad} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recents" component={Recents} />
        <Route path="/voicemail" component={Voicemail} />
    </Switch>
)