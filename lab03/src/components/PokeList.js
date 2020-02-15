import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import Page from './Page.js';

export default class PokeList extends Component {
    state = { typeSelected: null, nameSearch: null, filterType: null, currentPokemonArr: [] }; 
    render() {

        let mappedPokemonType = this.props.pokemons.filter (pokemon => {
            // console.log(this.state)
            if(!this.state.typeSelected) return true;
            // console.log(this.state)
            return pokemon.type_1 === this.state.typeSelected;

        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        let mappedPokemonName = this.props.pokemons.filter (pokemon => {
            if(!this.state.nameSearch) return true;
            return pokemon.pokemon === this.state.nameSearch;
        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        const handleTypeChange = e => {
            this.setState({...this.state, typeSelected: e.target.value});
        };
        const handleNameChange = e => {
            this.setState({ ...this.state, nameSearch: e.target.value});
        };

        const filterPoke = (filterType) => {
            let mappedPokemon 
            if (filterType === 'name') {

                mappedPokemon =  mappedPokemonName 
            }
            else if (filterType === 'type_1') {
                mappedPokemon = mappedPokemonType
            }
            console.log("filter type",filterType)
            this.setState({...this.state, currentPokemonArr: mappedPokemon})
            console.log(mappedPokemon)
            return mappedPokemon
        }
        
        let currentPokemon = () => {
            console.log(this.state.currentPokemonArr)
            if (this.state.currentPokemonArr) {
                return this.state.currentPokemonArr[0]
            } else {
                return null;
            }
        }

        // let currentPokemon = this.state.currentPokemonArr[0] ? this.state.currentPokemonArr[0] : null
        return (
            <div>
                <main>
                    <button onClick={() => {
                        this.setState({...this.state, filterType: 'name'})
                        filterPoke(this.state.filterType);
                    }}>name</button>
                    <button onClick={() =>{
                        this.setState({...this.state, filterType:'type_1'})
                        filterPoke(this.state.filterType);
                    }}>Type</button>
                    <section className='options'>
                        <label>
                            Name: 
                            <input type='text' name='name' onChange={handleNameChange}/>
                        </label>
                        <select className='pokemon-filter' onChange={handleTypeChange}>
                            <option value={this.state.typeSelected}>What's your Pokemon?</option>
                            <option value='grass'>Grass</option>
                            <option value='fire'>Fire</option>
                            <option value='water'>Water</option>
                        </select>
                    </section>

                    <section className='list-section'>
                        <ul className='pokemons'>{currentPokemon()}</ul>
                        
                    </section>
                    <Page/>
                </main>
            </div>
        )
       
    }
}