import React from 'React';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
            <li></li>
        </ul>
    );
};

export default VideoList;