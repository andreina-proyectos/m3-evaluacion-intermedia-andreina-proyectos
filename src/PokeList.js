import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <ul className="poke__list">
      {this.props.myPokemonListData.map(
        pokemonElement => {
        return(    
          <li className="poke__card">
            <Pokemon
              pokename={pokemonElement.name}
              pokeimg= {pokemonElement.url}
              poketype1= {pokemonElement.types}
              poketype2={pokemonElement.types}

            />
          </li>
        )
      })}
    </ul>
    )
  }
}

export default PokeList;