import React from 'react';
import routes from './routes'
import star from './assets/iconmonstr-star-3.svg'
import recent from './assets/iconmonstr-clock-thin.svg'
import voicemail from './assets/voicemail-24px.svg'
import contact from './assets/supervised_user_circle-24px.svg'
import {withRouter} from 'react-router-dom'
import './App.css';

function App(props) {
  return (
    <div className="App">
      {routes}
   </div>
  );
}

export default withRouter(App);
