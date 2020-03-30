import React, { Component } from "react";

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <div className='title-container'>
                    <h2>{this.props.pokemon.pokemon}</h2>

                    <p className='type'>{this.props.pokemon.type_1}</p>
                </div>

                <div className='image'>
                    <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image}/>
                </div>
                <p className='attack'>{this.props.pokemon.attack}</p>
                <div>
                    <p className='experience'>{this.props.pokemon.base_experience}</p>
                </div>
                
            </li>

         );
    }
}