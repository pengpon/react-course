import React, { Component } from 'react';
import names from '../names.json';

const withNames = (WrappedComponent) => {
    return class extends Component {
        state = {
            text: '',
            items: names
        }

        handleTextChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();

            this.setState(({ text }) => ({
                items: text ? names.filter(name => name.includes(text)) : names
            }))
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    text={this.state.text}
                    items={this.state.items}
                    onChange={this.handleTextChange}
                    onSubmit={this.handleSubmit}
                />
            )
        }
    }
}
export default withNames;