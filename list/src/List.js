import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <ul>
                <Item />
                <Item />
                <Item />
            </ul>
        )
    }
}

export default List;
