import React from 'react';

// const VideoDetail = (props) => {

const VideoDetail = ({video}) => {
    const videoId = video.id.videoId;

    //This is with vanilla JavaScript: const url = 'https://www.youtube.com/embed/' + videoId;

    //This is with ES6:
    const url = `https://www.youtube.com/embed/${videoId}`;
    // This will come up with the URL for videos as long as the videoId is retrieved
    // The iframe points to this URL showing a YouTube video player inside of the application.

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
                /*Make use of the iframe by providing the URL to it.*/
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;