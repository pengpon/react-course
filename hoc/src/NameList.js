import React, { Component } from 'react';

import names from './names.json'

class NameList extends Component {
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

export default NameList;