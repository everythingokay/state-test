import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.generateRandom = this.generateRandom.bind(this);
    }
    generateRandom() {
        let random = Math.floor(Math.random() * 10) + 1;
        this.setState({num: random});
    }
    render() {
        return (
            <div>
                <h2>Number is:</h2>
                <h1> {this.state.num}</h1>
                {this.state.num === 7 ?
                <h2>You win !</h2>
                : <button onClick={this.generateRandom}>Generate Random Number</button>
                }
            </div>
        )
    }
}

export default Clicker;