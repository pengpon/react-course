import React, { Component } from 'react';

class Promotion extends Component {
    // state = {
    //     open : false
    // }

    // toggleOpen = () => {
    //     this.setState({
    //         open: !this.state.open,
    //     })
    // }
    render() {
        const { open, toggleOpen } = this.props;
        return (
            <div>
                <h2 onClick={toggleOpen}>Promotion</h2>
                { open &&  <span> Promotion content</span>}
            </div>
        )
    }
}

export default Promotion;