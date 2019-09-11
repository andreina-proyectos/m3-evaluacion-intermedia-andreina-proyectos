import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="container">
        <img src={this.props.pokeimg} alt="" className="card__pokeimg"/>
        <h2 className="card__pokename">{this.props.pokename}</h2>
        <p className="card__poketype1">{this.props.poketype1}</p>
        <p className="card__poketype2">{this.props.poketype2}</p> 
      </div>
    )
  }
}

export default Pokemon;