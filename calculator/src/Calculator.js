import React, { Component } from 'react';
import Number from './Number';
import Operator from './Operator';
import Result from './Result';

class Calculator extends Component {
    state = {
        result: 0,
        disableNumber: true,
        operator: null
    }

    onClick = (event) => {
        let input = event.target.innerText;
        let operandList = [0,1,2,3,4,5,6,7,8,9];
        let operatorList = ['+', '-', 'x', '/'];

        let { result, disableNumber, operator} = this.state;

        if (disableNumber && operandList.includes(parseInt(input))) return;

        if (input === 'C') {
            this.setState({
                result: 0,
                disableNumber: false
            })
            return;
        }

        if (operatorList.includes(input)) {
            this.setState({
                operator: input,
                disableNumber: false
            })
            return;
        }


        if (operandList.includes(parseInt(input))) {
            switch (operator) {
                case '+':
                    this.setState({
                        result: (`${parseInt(result) + parseInt(input)}`),
                    })
                    break;
                case '-':
                    this.setState({
                        result: (`${parseInt(result) - parseInt(input)}`),
                    })
                    break;
                case 'x':
                    this.setState({
                        result: (`${parseInt(result) * parseInt(input)}`),
                    })
                    break;

                case '/':
                    this.setState({
                        result: (`${parseInt(result) / parseInt(input)}`)
                    })
                    break;
                default:
                    break;
            }

            this.setState({
                disableNumber: false
            })
            return;
        }
    }

    render() {
        return(
            <div className='container' onClick={this.onClick}>
                <Result>{this.state.result}</Result>
                <div className='number-wrapper'>
                    <Number>7</Number>
                    <Number>8</Number>
                    <Number>9</Number>
                    <Number>4</Number>
                    <Number>5</Number>
                    <Number>6</Number>
                    <Number>1</Number>
                    <Number>2</Number>
                    <Number>3</Number>
                </div>
                    <Number className='zero'>0</Number>
                    <Number className='clear'>C</Number>
                <div className='operator-wrapper'>
                    <Operator>+</Operator>
                    <Operator>-</Operator>
                    <Operator>x</Operator>
                    <Operator>/</Operator>
                </div>
            </div>
        )
    }
}

export default Calculator;
