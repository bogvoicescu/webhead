import React from 'react';
import ReactDOM from 'react-dom';
import Foot from './containers/Foot';
import Main from './containers/Main';
import Nav from './containers/Nav';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Foot />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
