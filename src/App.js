import React from 'react';
import './App.css';
// import './scss/App.scss';
import PokeData from './PokeData';
import PokeList from './PokeList';

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
        <PokeList
        myPokemonListData={this.state.data}
        />
      </div>
    )
  }
}

export default App;
