import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './pokeList';
import request from 'superagent';

export default class App extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    
    this.setState({data:data.body.results})
  }
  render(){
    return (
      <div>
        <Header/>
        <PokeList pokemons= {this.state.data}/>
        
      
        
      </div>
    );
  }
}