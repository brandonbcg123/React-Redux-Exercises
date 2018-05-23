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
         <div className="search-bar"> Search:
     <input
         value={this.state.term}
         //when we tell input that its value is provided by this.state.term, we turn the input into what is called a controlled component. A controlled component has its value set by state, so its value only changes when its state changes.
         onChange={(event) => this.setState({term: event.target.value})} />
             {this.state.term}
         </div>
     );
     //use this.state.term here because we are nor modifying or manipulating the value of term, but we are just referencing it, like saying hey here is what the value is, so it's okay to reference it like this, but don't do anything here like {this.state.term = '5'} where your modifying it (that is what this.setState is for!!!

     //We always manipulate our state with this.setState, it informs React the state is changing and this is what the new state is.

     // Only in the constructor we have this.state = an object, but to change our state everywhere else inside our component we use this.setState
 }
}

export default SearchBar;





