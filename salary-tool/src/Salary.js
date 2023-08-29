import React, { Component } from 'react';

let timer
class Salary extends Component {
    state = {
        month: 0,
        startTime: 0,
        currentTime: 0
    }

    onChangeMonth = (e) => {
        this.setState({
            month: e.target.value && parseInt(e.target.value, 10)
        })
    }

    handleStart = () => {
        this.setState({
            startTime: Date.now(),
            currentTime : Date.now()
        })
        clearInterval(timer)
        timer = setInterval(()=> {
            this.setState({
                currentTime : Date.now()
            })}, 100)
    }

    handleStop = () => {
        clearInterval(timer)
    }

    handleReset = () => {
        clearInterval(timer)
        this.setState({
            month: 0,
            startTime: 0,
            currentTime: 0
        })
    }

    render() {
        const { month, startTime, currentTime } = this.state;
        const time = (currentTime - startTime)/1000
        return(
            <div>
                <input type="number" onChange={this.onChangeMonth} value={`${month}`}/>請輸入月薪
                <button onClick={this.handleStart}>開工</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleReset}>Reset</button>
                <p>你的月薪是：{month}</p>
                <p>你的日薪是：{month/30}</p>
                <p>你的時薪是：{month/30/8}</p>
                <p>你的分薪是：{month/30/8/60}</p>
                <p>你的秒薪是：{month/30/8/60/60}</p>
                <div>
                    經過時間：{time.toFixed(1)}
                </div>
                <div>
                    目前累積金額：{time * month / 30 / 8 / 60/ 60}
                </div>
            </div>
        )
    }
}

export default Salary
