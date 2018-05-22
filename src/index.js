import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAQqdxjykmMOgyIUD18WLGjGANO5KAocRo';


// Create a new component. Component is a function or object that returns some HTML.

//render - place this components html onto the page

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
            //start off as null because there is not not a selected video to start with.
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                //sets list of videos
                selectedVideo: videos[0]
            });
            //sets an initial video
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
            // Video List needs to get access to the videos listed on the app state, so for VideoList to reference app we pass the list of videos just by defining a property on the jsx tag. Passing data like this is referred to as passing props. The data that we are passing from app to VideoList videos is referred to as a prop, so this is passing prop videos to VideoList, anytime the app re-renders (like when we setState on the component) VideoList will get the new list as well.
        );
    }

    //showing searchBar component inside the App component. Now it's like a tree with the top level as App and SearchBar as its child.
}

// Take this component's generated HTML and put it on the page (in the DOM)

//When writing a component out just the variable (word) will be the class of a component (A type that produces instances)

//To make an instance just have to wrap it in jsx tags like so <app />

// ReactDOM.render(App);
//passing a component class, but need to pass a component instance

ReactDOM.render(<App/>, document.querySelector('.container'));
// passing a component instance to ReactDOM.render; the second argument is a reference to an existing DOM node on the page. When you render this component (<App />) I want you to render it, produce some html, and then insert that html into this element that exists in our html document.