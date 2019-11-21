import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Keypad from './Keypad/Keypad'
import Contacts from './Contacts/Contacts'
import Favorites from './Favorites/Favorites'
import Recents from './Recents/Recents'

export default (
    <Switch>
        <Route exact path="/keypad" component={Keypad} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/favorites" component={Favorites} />
    </Switch>
)