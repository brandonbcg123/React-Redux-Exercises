import React from 'react';

import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAQqdxjykmMOgyIUD18WLGjGANO5KAocRo';

// Create a new component. Component is a function or object that returns some HTML.

//render - place this components html onto the page

const App = () => {

        return (
            <div>
                <SearchBar />
            </div>
        );
        //showing searchBar component inside the App component. Now it's like a tree with the top level as App and SearchBar as its child.
};

// Take this component's generated HTML and put it on the page (in the DOM)

//When writing a component out just the variable (word) will be the class of a component (A type that produces instances)

//To make an instance just have to wrap it in jsx tags like so <app />

// ReactDOM.render(App);
//passing a component class, but need to pass a component instance

ReactDOM.render(<App />, document.querySelector('.container'));
// passing a component instance to ReactDOM.render; the second argument is a reference to an existing DOM node on the page. When you render this component (<App />) I want you to render it, produce some html, and then insert that html into this element that exists in our html document.