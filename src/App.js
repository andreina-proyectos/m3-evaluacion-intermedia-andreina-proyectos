import React from 'react';
import './App.css';
import './scss/App.scss';
import PokeData from './components/PokeData';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : PokeData
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Mi lista de pokemones</h1>
        <PokeList
        myPokemonListData={this.state.data}
        />
      </div>
    )
  }
}

export default App;
