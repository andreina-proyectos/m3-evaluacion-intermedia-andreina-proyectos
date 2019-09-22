import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {

  isFavorite() {
    const isPokeFav = this.props.favorite.includes(this.props.id);
    console.log(this.props.id);
    console.log(this.props.favorite);
    console.log('soy fav?', isPokeFav);
    return(
      isPokeFav? 'star' : 'star-hidden'
    )
  }
  

  render() {
    const {poketypes, pokename, pokeimg, favorite, id} = this.props;

    return(
      <div className="container">
        <p className={this.isFavorite()}>⭐️</p>
        <img src={pokeimg} alt={`Imagen de ${pokename}`} className="card__pokeimg"/>
        <h2 className="card__pokename">{pokename}</h2>
        <div className="types-box">
          {poketypes.map((type, index)=> {
            return(
              <p key={index} className="card__poketype">{type}</p>
            )
          })}
        </div>
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