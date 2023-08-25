import React, { Component } from 'react';

class Operator extends Component {
    render() {
        return(
            <button className='operator'>
                {this.props.children}
            </button>
        )
    }
}

export default Operator;
