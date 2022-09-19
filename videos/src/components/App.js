import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTextSubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        this.setState({ videos: response.data.items});
    }
    onVideoSelect = (video) => {
        console.log('From the App !', video);
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTextSubmit} />
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
        );
    }
}
export default App;