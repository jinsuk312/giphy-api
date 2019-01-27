import React from 'react';

//extending React.Component so that our class is inheriting whatever properties are inside of the constructor of the parent ReactComponent
class SearchBar extends React.Component {
    // added a constructor method, runs autmatically when class is initialized
    constructor(){
        // called super method method that it lets us access this.state
        super();
        //initializing state, letting app know it needs to be aware of our search term
        this.state = {term: ''}
    }
// this is fired every time the input is changed
    onInputChange(term){
        //using setState to signal to react that the state has changed(instead of this.state(term);)
        this.setState({term});
        //pass data from child component SearchBar to its parent (App)
        this.props.onTermChange(term);
    }
    render(){
        return(
            // everything we update our input onChange automatically fires and that thats the term and runs onInputChange
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;