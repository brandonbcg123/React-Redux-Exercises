import React, { Component } from 'react';
//same thing as doing: const Component = React.Component;

//Event Handler Using es6

class SearchBar extends Component {
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





