import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RomanConversor from './RomanConversor'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RomanConversor />
  </React.StrictMode>,
  document.getElementById('home')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
