import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h2>Child: {this.props.count}</h2>
                <button onClick={this.props.addParent}>+Parent</button>
                <button onClick={this.props.addCount}>+Child</button>
            </div>
        )
    }
}

export default Child;