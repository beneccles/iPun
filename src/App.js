import React from 'react';
import routes from './routes'
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
