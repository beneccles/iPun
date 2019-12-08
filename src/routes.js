import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Lock from './components/Lock/Lock'
import Home from './components/Home/Home'
import Keypad from './components/Phone/Keypad/Keypad'
import Contacts from './components/Phone/Contacts/Contacts'
import Favorites from './components/Phone/Favorites/Favorites'
import Recents from './components/Phone/Recents/Recents'
import Voicemail from './components/Phone/Voicemail/Voicemail'
import Browser from './components/Browser/Browser'

export default (
    <Switch>
        <Route exact path="/" component={Lock} />
        <Route path="/home" component={Home} />
        <Route path="/phone" component={Keypad} />
        <Route path="/keypad" component={Keypad} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recents" component={Recents} />
        <Route path="/voicemail" component={Voicemail} />
        <Route path="/browser" component={Browser} />
    </Switch>
)