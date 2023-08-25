import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        step: 1
    }

    addCount = () => {
        const { count, step } = this.state;
        this.setState({
            count: count + step,
            step: step + 1,
        })
    }

    render() {
        const { count, step } = this.state;
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={this.addCount}>+{step}</button>
            </div>
        );
    }
}

export default Counter;