import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
// import pokemons from './data.js';

export default class PokeList extends Component {
    state = { typeSelected: null, nameNotNull: null, filterType: null }; 
    render() {

        let mappedPokemonType = this.props.pokemons.filter (pokemon => {
            console.log(this.state)
            if(!this.state.typeSelected) return true;
            console.log(this.state)
            return pokemon.type_1 === this.state.typeSelected;

        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        let mappedPokemonName = this.props.pokemons.filter (pokemon => {
            if(!this.state.nameNotNull) return true;
            return pokemon.type_1 === this.state.typeSelected;
        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        const handleTypeChange = e => {
            this.setState({ typeSelected: e.target.value});
        };
        const handleNameChange = e => {
            this.setState({ typeSelected: e.target.value});
        };

        const filterPoke = (filterType) => {
            let mappedPokemon 
            if (filterType === 'name') {

                mappedPokemon =  mappedPokemonName 
            }
            else if (filterType === 'type_1') {
                mappedPokemon = mappedPokemonType
            }

            return mappedPokemon
        }

        return (
            <div>
                <main>
                    <button onClick={() => {
                        this.setState({...this.state, filterType:'name'})
                    }}>name</button>
                    <button onClick={() =>{
                        this.setState({...this.state, filterType:'type_1'})
                    }}>Type</button>
                    <section className='options'>
                        <label>
                            Name: 
                            <input type='text' name='name'/>
                        </label>
                        <select className='pokemon-filter' onChange={handleTypeChange}>
                            <option value={this.state.typeSelected}>What's your Pokemon?</option>
                            <option value='grass'>Grass</option>
                            <option value='fire'>Fire</option>
                            <option value='water'>Water</option>
                        </select>
                    </section>

                    <section className='list-section'>
                        <ul className='pokemons'>{filterPoke(this.state.filterType)}</ul>
                    </section>
                </main>
            </div>
        )
       
    }
}