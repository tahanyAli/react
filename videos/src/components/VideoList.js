import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video, key) => {
        return <VideoItem video={video} key={key}/>
    });
    return (
        <div>{renderedList}</div>
    )
}
export default VideoList;