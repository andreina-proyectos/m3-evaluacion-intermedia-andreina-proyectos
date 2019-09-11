import React from 'react';
import './App.css';
// import './scss/App.scss';
import PokeData from './PokeData';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedata : PokeData;
    }
  }

  render() {
    return (
      <div className="wrapper">

       <PokeList
       pokedata={this.state.pokedata}
       />
      </div>
    );
  }
}

export default App;
