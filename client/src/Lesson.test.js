import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from './Lesson';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lesson />, div);
});
