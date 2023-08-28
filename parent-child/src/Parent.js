import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {
        count: 0,
        childCount: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    addChildCount = () => {
        this.setState({
            childCount: this.state.childCount + 1
        })
    }
    render() {
        return (
            <div>
                <h2>Parent: {this.state.count}</h2>
                <button onClick={this.addCount}>+Parent</button>
                <button onClick={this.addChildCount}>+Child</button>
                <Child count={this.state.childCount} addCount={this.addChildCount} addParent={this.addCount}/>
            </div>
        )
    }
}

export default Parent;