import React, { Component } from 'react';
//same thing as doing: const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        //super is calling the parent method (Component)
        this.state = { term: ''};
        //whenever we use state we initialize it by creating a new object and assigning it to this.state
    }
 render() {
     return (
         <div>
     <input onChange={(event) => this.setState({term: event.target.value})} />
             Value of the input: {this.state.term}
         </div>
     );
     //use this.state.term here because we are nor modifying or manipulating the value of term, but we are just referencing it, like saying hey here is what the value is, so it's okay to reference it like this, but don't do anything here like {this.state.term = '5'} where your modifying it (that is what this.setState is for!!!

     //We always manipulate our state with this.setState, it informs React the state is changing and this is what the new state is.

     // Only in the constructor we have this.state = an object, but to change our state everywhere else inside our component we use this.setState
 }
}

export default SearchBar;





