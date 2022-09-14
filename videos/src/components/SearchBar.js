import React from "react";

class SearchBar extends React.Component {
    state = {text: ''};

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        //TODO: Make sure we call
        //callback from parent component
        this.props.onFormSubmit(this.state.text);
    };
    render() {
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.text} onChange={this.onInputChange} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;