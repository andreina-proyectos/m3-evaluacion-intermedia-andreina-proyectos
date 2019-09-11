import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {

  render() {
    return(
    <ul className="poke__list">
      {this.props.PokeList.map(pokemonElement => {
        return(    
      <li className="poke__card">
          <Pokemon
          pokename={pokedata.name}
          />
      </li>
        )
      })}
    </ul>
    )
  }
}

export default PokeList;