import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video = {video} />
       //etag is a unique identifier that can be used as a key for each video that would be give a unique key for each element in the Videoitems array. This helps React identify which id (video) to change.
        //for each element of videos we have a function that gets called with a single video and return a VideoListItem and pass the video as a property named video.
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;