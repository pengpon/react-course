# 三種組件

## Class Component
```javascript
class ProgressBar extends Component {
    render() {
        const { value } = this.props;
        return(
            <div>{value}%</div>
        )
    }
}
export defalt ProgressBar;
```


## PureComponent
- 和 Class Component 差異在於`效能`
- 若 props、state 值一樣，PureComponent 不會重新 render
- 屬於 shallow compare，只比較第一層


```javascript
class ProgressBar extends PureComponent {
    render() {
        const { value } = this.props;
        return(
            <div>{value}%</div>
        )
    }
}
export defalt ProgressBar;
```

## Functional Component

```javascript
const  ProgressBar = (props) {
    const { value } = props;
    return(
        <div>{value}%</div>
    )
}
export defalt ProgressBar;
```

- props 當參數傳入
- 當 Component 只有 render 函式，可改為 Functional Component 寫法
- 又稱為 Stateless Functional Component
