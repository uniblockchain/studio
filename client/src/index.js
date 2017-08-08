import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lesson from './Lesson';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lesson />, document.getElementById('root'));
registerServiceWorker();
