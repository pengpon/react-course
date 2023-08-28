# 組件

## 組件的組成

```javascript
import React, { Component } from 'react';

class Human extends Component {
    state = {
        x: 1,
        y: 2,
    }

    constructor() {
        // 可在 constructor 中指定 state
        // this.state = {
        //     x: 1,
        //     y: 2,
        // }
    }
    /* 生命週期函式 */
    componentDidMount() {
        // this -> 組件

    }
    /* 自訂函式，可作為事件處理或是讓生命週期函式呼叫用 */
    onClick() {

    }
    /* 自訂函式 */
    onChange = () => {

    }

    render() {
        return (
            <div></div>
        )
    }
}
```

注意事項：
- 一定要有 render 函式
- 生命週期函式中的 `this` 指的是組件本身
- 自訂函式如果宣告成方法，裡面的 this 不一定指向組件，要看如何呼叫這個函式而決定
- 如果宣告為屬性，並使用箭頭函式，則裡面的 this 一定是組件
- state 屬性為一個物件，可在 `constructor`中指定，或是直接在 class 中宣告
- 屬於類別的屬性或方法，稱為靜態屬性、靜態方法


## 組件狀態 state

1. 定義狀態
```javascript
state = {
    title: 'Message'
}
```

2. 使用狀態
在 render方法內使用 `this.state.title` 取用數值

3. 更新狀態
`this.setState` 為 React 組件的內建函式，用它來更新狀態，傳入狀態物件 (partial state)

## 自訂函式
兩種宣告方式

```javascript
constructor(props) {
    // 確保 sayHi this 為組件
    this.sayHi = this.sayHi.bind(this);
 }
sayHi() {

}
```

```javascript
// 箭頭函式 this 為組件
sayHi = () => {

}
```

## props

```javascript
// List.js

// 指定給 Item 屬性 text
<Item text="JavaScript"/>
<Item text="React"/>
```

```javascript
// Item.js
<li>{this.props.text}</li>
```

- props 可以傳入任何東西，如果是字串以外的東西，要用 `{}` 包起來
`<Item text="JavaScript" price={100}/>`

- 夾在子組件的東西，在子組件可使用 `this.props.children`

```javascript
// List.js
`<Item>Javscript</Item>`
```
```javascript
// Item.js
`<li>{this.props.children}</li>`
```

### 進階
#### 用 props 指定初始 state

```javascript
// index.js
<Counter initCount={10} />

// Counter.js
contructor(props){
    super(props);
    this.state = {
        count: props.initCount
    }
}
```

#### 用 defaultProps 指定預設 props

```javascript
// 寫在 Component 裡
static defaultProps = {
    initCount: 0,
}

// 在宣告完 Component 後再加上去
Counter.defaultProps = {
    initCount: 0,
}
```

#### 用 propTypes 檢查 props 型別
引入 React 型別檢查 `import PropTypes from 'prop-type`

```javascript

// 寫在 Component 裡
static propTypes = {
    initCount: PropTypes.number
}

// or 寫在 Component 外
Counter.propTypes= {
    initCount: PropTypes.number

}
```