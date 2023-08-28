import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        const { value } = this.props;
        return(
            <div>{value}%</div>
        )
    }
}

export default ProgressBar;