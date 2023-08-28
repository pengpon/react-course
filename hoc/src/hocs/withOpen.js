import React, { Component } from 'react';

// 輸入 Component、回傳 Component
const withOpen = (WrappedComponent) => {
    return class extends Component {
        state = {
            open : false
        };

        toggleOpen = () => {
            this.setState({
                open: !this.state.open,
            });
        };

        render() {
            return (
            <WrappedComponent
                open={this.state.open}
                toggleOpen={this.toggleOpen}
                {...this.props}/>
            );
        }
    }
};

export default withOpen;