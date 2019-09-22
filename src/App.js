import React from 'react';
import './App.css';
import './scss/App.scss';
import PokeData from './components/PokeData';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : PokeData,
      favorite: []
    }
    this.handlePokeClicked=this.handlePokeClicked.bind(this);
  }

  handlePokeClicked(event) {
    const favorite = this.state.favorite;
    const pokeId=parseInt(event.currentTarget.id);

    if(favorite.includes(pokeId)) {
      const favIndex = favorite.indexOf(pokeId);
      favorite.splice(favIndex, 1);
    }
    else{
      favorite.push(pokeId);
    }

    this.setState({
      favorite: favorite
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Mi lista de pokemones</h1>
        <PokeList
        myPokemonListData={this.state.data}
        handlePokeClicked={this.handlePokeClicked}
        favorite={this.state.favorite}
        />
      </div>
    )
  }
}

export default App;
