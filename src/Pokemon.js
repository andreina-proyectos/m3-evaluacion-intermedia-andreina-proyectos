import React from 'react';

class Pokemon extends React.Component {
  render() {
    return(
      <div className="container">
        <img src="" alt="" className="card__pokeimg"/>
        <h2 className="card__pokename">{this.props.pokename}</h2>
        <p className="card__poketype1">TIPO</p>
        <p className="card__poketype2">TIPO</p> 
      </div>
    )
  }
}

export default Pokemon;