import React from 'react';
import forecastUtil from '../util/forecastUtil';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        console.log(this.state.query)
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmit(){
        debugger
        forecastUtil(this.state.query)
    }




    render(){

        return (
            <div>
                <input type="text" value={this.state.query} placeholder="Enter City, State" id="search-locat" onChange={this.handleInput}/>
                <button onClick={this.handleSubmit}>Checkout Weather</button>
            </div>
        )
    }
}

export default Search