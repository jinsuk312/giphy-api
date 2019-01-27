// importing React library and specifically the Component method from it
import React, { Component } from 'react';
// CSS
import './App.css';
// importing SearchBar class
import SearchBar from './SearchBar';
class App extends Component {
  handleTermChange(term){
    console.log(term);
  }
  render() {
    return (
      // Main container holds our SearchBar component and is 
      <div className="App">
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

export default App;
