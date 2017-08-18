import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import BackgroundImage from './components/BackgroundImage';


registerServiceWorker();

ReactDOM.render((
  <div>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  <BackgroundImage/>
  </div>
), document.getElementById('root'))
