import React, { Component } from 'react';
//same thing as doing: const Component = React.Component;

//Event Handler Using es6

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //super is calling the parent method (Component)
        this.state = { term: ''};
        //whenever we use state we initialize it by creating a new object and assigning it to this.state - the object we pass will also contain properties that we want to record on the state - in the case above we want to record the property 'term' on state, so whenever the user updates the search input term is the property that we want to record (update) that change on.
    }
 render() {
     return <input onChange={(event) => console.log(event.target.value)} />;
 }
}

export default SearchBar;

 //Even Handler without using es6

 // class SearchBar extends Component {
 //     render() {
 //         return <input onChange={this.onInputChange}/>;
 //     }
 //
 //    onInputChange(event) {
 //        console.log(event.target.value);
 //        console.log(event)
 //    }

    //the event handler here is defined as a method on the class. (The one without es6.





