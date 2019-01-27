// importing React library and specifically the Component method from it
import React, { Component } from 'react';
// CSS
import '../styles/App.css';
// importing SearchBar,GiftLit class
import SearchBar from './SearchBar';
import GifList from './GifList';
// importing request to handle HTTP request
import request from 'superagent';
//extending React.Component so that our class is inheriting whatever properties are inside of the constructor of the parent ReactComponent
class App extends Component {
  // added a constructor method
  constructor(){
    //called super method that lets us access this.state
    super();
    //initializing state, letting app know it needs to be aware to track data  
    this.state= {
      gifs:[],
    };
    //tells app that the this of handleTermChange is bound to App, not onTermChange
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  //API call thats receiving term from our SearchBar
  handleTermChange(term) {
    //adding term to the API call and replace method to swap all the spaces with '+'
    const url = `https://crossorigin.me/http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=mpyBfV1wY3bkM6yzxJO0jtsLZhclW6SX&limit=20&lang=en`;
    //get request with SuperAgent to the above URL
    request.get(url, (err,res) => {
      this.setState({gifs: res.body.data})
    });
  }
  render() {
    return (
      //App is handling an array of gifs. SearchBar tracks the search term entered in the input, giflist handles where the data goes 
      <div className="App">
        <h1 className="app-title">Giphy API</h1>
        <h6 className="input-description">Enter Search Query below for GIPHYS!</h6>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
