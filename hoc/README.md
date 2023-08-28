# HOC
高階組件 `Higher-Order Components`

## 情境一
- 當不同的組件有不同的內容，但有相同的行為，可以使用 HOC
- HOC: 以 Component 為輸入的 Component，並回傳一個 Component
- 相同邏輯放在 HOC 中，能解決同一個邏輯要放在不同組件的問題

```javascript
import React, { Component } from 'react';

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
                // {...this.props} 記得！！
                {...this.props}/>
            );
        }
    }
};

export default withOpen;
```

## 情境二
- UI 視覺一樣，但邏輯不同，可將邏輯寫在個別的 HOC 中
- 將 List 寫成 Functional Component，針對收到的值，進行 render

參考 `withOpen.js` `withTodo.js` `List.js`
