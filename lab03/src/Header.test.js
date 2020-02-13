import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js';

test('renders App.js correctly', () => {
    const app = renderer
      .create(<Header />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });