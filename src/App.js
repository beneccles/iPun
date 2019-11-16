import React from 'react';
import logo from './logo.svg';
import Lock from './components/Lock/Lock'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
