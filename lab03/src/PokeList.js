import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
// import pokemons from './data.js';

export default class PokeList extends Component {
    state = { selected: null }; 
    render() {

        const mappedPokemon = this.props.pokemons.filter (pokemon => {
            if(!this.state.selected) return true;

            return pokemon.type_1 === this.state.selected;
            
        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        const handdleChange = e => {
            this.setState({ selected: e.target.value});
        };
        return (
            <div>
                <main>
                    <section className='options'>
                        <select className='pokemon-filter' onChange={handdleChange}>
                            <option value= 'defaultValue'>What's your POkemon?</option>
                            <option value='grass'>Grass</option>
                            <option value='fire'>Fire</option>
                            <option value='water'>Water</option>
                        </select>
                    </section>

                    <section className='list-section'>
                        <ul className='pokemons'>{mappedPokemon}</ul>
                    </section>
                </main>
            </div>
        )
       
    }
}