import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Progress extends Component {
    state = {
        value: 0
    };

    add = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <ProgressBar value={value} />
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

export default Progress;