import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    return(
    <ul className="poke__list">
      {this.props.myPokemonListData.map(
        pokemonElement => {
        const {name, url, types, id} = pokemonElement;
        return( 
          <li id={id} onClick={this.props.handlePokeClicked} key={id} className="poke__card">
            <Pokemon
              pokename={name}
              pokeimg= {url}
              poketypes= {types}
              favorite={this.props.favorite}
              id={id}
            />
          </li>
        )
      })}
    </ul>
    )
  }
}

PokeList.propTypes = {
  myPokemonListData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;