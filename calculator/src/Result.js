import React, { Component } from 'react';

class Result extends Component {
    render() {
        return(
            <div className='result'>{this.props.children}</div>
        )
    }
}

export default Result;
