import React, { Component } from 'react';
import propTypes from 'prop-types';
class Counter extends Component {
    // props 預設值
    static defaultProps = {
        initCount: 10
    }
    // 型別檢查
    static propTypes = {
        initCount: propTypes.number,
    }

    constructor(props){
        super(props);
        this.state = {
            count: props.initCount,
            step: 1
        }
    }

    // 改用 props 傳入的 count
    // state = {
    //     count: 0,
    //     step: 1
    // }

    addCount = () => {
        const { count, step } = this.state;
        this.setState({
            count: count + step,
            step: step + 1,
        })
    }

    render() {
        const { count, step } = this.state;
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={this.addCount}>+{step}</button>
            </div>
        );
    }
}
/* 寫在 Component 外 */
// Counter.defaultProps = {
//     initCount: 0
// }
// Counter.propTypes = {
//     initCount: propTypes.number,
// }

export default Counter;