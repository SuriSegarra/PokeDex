import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import Page from './Page.js';

export default class PokeList extends Component {
    constructor(props){
        super(props)
        this.state = { typeSelected: null, nameSearch: null, filterType: null, currentPokemonArr: [], page:0,experienceSelected: null, heightSelected: null};

    }

    render() {
        let increment = () => {
            console.log('state', this.state)
            let nextPage = this.state.page + 1
            this.setState({...this.state, page: nextPage })
        }
        let decrement = () => {
            console.log('state', this.state)
            let backPage = this.state.page - 1
            this.setState({...this.state, page: backPage })
        }
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
        let mappedPokemonExperience = this.props.pokemons.filter (pokemon => {
            if(!this.state.experienceSelected) return true;
            return pokemon.base_experience >= this.state.experienceSelected;
        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });
        let mappedPokemonHeight = this.props.pokemons.filter (pokemon => {
            if(!this.state.heightSelected) return true;
            console.log(pokemon.height, this.state.heightSelected)
            return pokemon.height === parseInt(this.state.heightSelected);
        })
        .map (pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });

        const handleTypeChange = e => {
            this.setState({...this.state, typeSelected: e.target.value});
        };
        const handleNameChange = e => {
            this.setState({ ...this.state, nameSearch: e.target.value});
        };
        const handleExperienceChange = e => {
            this.setState({ ...this.state, experienceSelected: e.target.value});
        };
        const handleHeightChange = e => {
            this.setState({...this.state, heightSelected: e.target.value});
        }

        const filterPoke = (filterType) => {
            let mappedPokemon 
            if (filterType === 'name') {

                mappedPokemon =  mappedPokemonName 
            }
            else if (filterType === 'type_1') {
                mappedPokemon = mappedPokemonType
            }
            else if(filterType === 'base_experience') {
                mappedPokemon = mappedPokemonExperience
            }
            else if(filterType === 'height'){
                // console.log('else if', mappedPokemonHeight)
                mappedPokemon = mappedPokemonHeight
            }
            // console.log("filter type",filterType)
            this.setState({...this.state, currentPokemonArr: mappedPokemon})
            // console.log(mappedPokemon)
            return mappedPokemon
        }
        
        let currentPokemon = () => {
            // console.log(this.state.currentPokemonArr)
            if (this.state.currentPokemonArr) {
                return this.state.currentPokemonArr[this.state.page]
            } else {
                return null;
            }
        }

        // let currentPokemon = this.state.currentPokemonArr[0] ? this.state.currentPokemonArr[0] : null
        return (
            <div>
                <main>
                    <button onClick={() => {
                        // this.setState({...this.state, filterType: 'name'})
                        filterPoke('name');
                    }}>name</button>
                    <button onClick={() =>{
                        // this.setState({...this.state, filterType:'type_1'})
                        filterPoke('type_1');
                    }}>Type</button>
                    <button onClick={() => {
                        filterPoke('base_experience');
                    }}>Experience</button>
                    <button onClick={() => {
                        filterPoke('height');
                    }}>Height</button>
                    
                    <button onClick={() => {

                     let sortedPokemons = this.state.currentPokemonArr.slice()
                   
                     sortedPokemons.sort((a, b) => {
                         
                         return a.props.pokemon.weight > b.props.pokemon.weight
                        })
                     this.setState({...this.state, currentPokemonArr: sortedPokemons})
                    //  objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));
                    }}>Sort by Size</button>

                    <button onClick={() => {
                        let sortedAttack = this.state.currentPokemonArr.slice()

                        sortedAttack.sort((a,b) => {
                            return a.props.pokemon.attack > b.props.pokemon.attack
                        })
                        this.setState({...this.state, currentPokemonArr: sortedAttack})
                    }}>Sort by strength</button>

                    
                    <section className='options'>
                        <label>
                            Name: 
                            <input type='text' name='name' onChange={handleNameChange}/>
                        </label>
                        <label>
                            Search Pokemon By Height (ft)
                            <input type='text' name='height' onChange={handleHeightChange}/>
                        </label>
                        <select className='pokemon-filter' onChange={handleTypeChange}>
                            <option value={this.state.typeSelected}>Type</option>
                            <option value='grass'>Grass</option>
                            <option value='fire'>Fire</option>
                            <option value='water'>Water</option>
                        </select>
                        <select className='pokemon-filter' onChange={handleExperienceChange}>
                            <option value='50'>Greater than 50 xp</option>
                            <option value='100'>Greater than  100 xp</option>
                            <option value='250'>Greater than 250 xp</option>
                        </select>
                    </section>

                    <section className='list-section'>
                        <ul className='pokemons'>{currentPokemon()}</ul>
                        
                    </section>
                    <Page nextPage={increment} backPage={decrement}/>
                </main>
            </div>
        )
       
    }
}