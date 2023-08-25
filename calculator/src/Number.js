import React, { Component } from 'react';

class Number extends Component {
    render() {
        const className = this.props.className ? this.props.className : 'number';
        return(
            <button className={className}>
                {this.props.children}
            </button>
        )
    }
}

export default Number;
