import React from 'react';
import ReactDOM from 'react-dom';
import Price from './Price';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Price />, div);
  ReactDOM.unmountComponentAtNode(div);
});