import React from 'react';
import renderer from 'react-test-renderer';
import PokeList from './PokeList';

test('renders App.js correctly', () => {
    const app = renderer
      .create(<PokeList pokemons={[]} />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });