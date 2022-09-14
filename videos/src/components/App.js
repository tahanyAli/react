import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
class App extends React.Component {
    onTextSubmit = (text) => {
        youtube.get('/search', {
            params: {
                q: text
            }
        });
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTextSubmit} />
        </div>
        );
    }
}
export default App;