import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {

  render() {
    const {poketypes, pokename, pokeimg} = this.props;
    return(
      <div className="container">
        <img src={pokeimg} alt={`Imagen de ${pokename}`} className="card__pokeimg"/>
        <h2 className="card__pokename">{pokename}</h2>
        {poketypes.map((type, index)=> {
          return(
            <p key={index} className="card__poketype1">{type}</p>
          )
        })}
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokename: PropTypes.string.isRequired,
  pokeimg: PropTypes.string.isRequired,
  poketypes: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Pokemon;