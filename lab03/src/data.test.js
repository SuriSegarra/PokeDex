import React from 'react';
import renderer from 'react-test-renderer';
import data from './data';

test('renders App.js correctly', () => {
    const app = renderer
      .create(<data />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });