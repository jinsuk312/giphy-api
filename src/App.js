import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './SearchBar';
class App extends Component {
  handleTermChange(term){
    console.log(term);
  }
  render() {
    return (
      <div className="App">
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

export default App;
