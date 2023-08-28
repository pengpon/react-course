import React, { Component } from 'react';

const withTodo = (WrappedComponent) => {
    return class extends Component {
        state = {
            text: '',
            items: []
        }

        handleTextChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault();

            this.setState(({items, text}) => ({
                text: '',
                items: text ? [...items, text]: [...items]
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
export default withTodo;