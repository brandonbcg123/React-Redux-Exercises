import React, { Component } from 'react';
//same thing as doing: const Component = React.Component;

class SearchBar extends React.Component {
 render() {
     return <input />;
 }
}
//making this a class-based component, this component is now essentially saying to other components that the user just typed and this is what they typed.

//every react component that is created must is class based must have the render method

export default SearchBar;



