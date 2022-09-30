import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTextSubmit('programming')
  }, []);
  const onTextSubmit = async (text) => {
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    selectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTextSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )

}
export default App;
