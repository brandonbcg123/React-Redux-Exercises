import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
//     const onVideoSelect = props.onVideoSelect;

const VideoListItem = ({video, onVideoSelect}) => {
    //the object in the arguments array has a property of video, grab that video and declare a new variable called video. ({video}) is completely identical to const video = props.video

    console.log(video);

    const imageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            {/*whenever a user clicks on this li, onVideoSelect will be called and it will be passed the particular VideoListItem's video.*/}
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>

                <div className="media-body">
                    <div
                        className="media-heading">{videoTitle}
                    </div>
                    {/*<div className="media-heading">{video.snippet.title}*/}
                    {/*</div>*/}
                </div>
            </div>
        </li>

    );
};

export default VideoListItem;