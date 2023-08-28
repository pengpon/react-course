import React, { Component } from 'react';

class TodoList extends Component {
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    { this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;