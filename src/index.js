import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    // constructor(props){
    // super(props);
    // this.state = {
    //     lat: null,
    //     long: null,
    //     errorMsg: ''
    // };
    // }
    state = { lat: null, long: null, errorMsg: '' };

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error:  {this.state.errorMsg} </div>
        }
        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="please accept location request" />
    }
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
                // console.log(position)
            },
            err => {
                this.setState({ errorMsg: err.message });
            }
        );
        console.log("my component was rendered to the screen ")
    }
    componentDidUpdate() {
        console.log("my component was just updated - it rerendered ")
    }
    render() {
        return <div>
            {this.renderContent()}
        </div>
    }
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);