import React, { Component } from 'react';

class CreditCard extends Component {
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
                <h2 onClick={toggleOpen}>CreditCard</h2>
                { open &&  <span> CreditCard content</span>}
            </div>
        )
    }
}

export default CreditCard;
