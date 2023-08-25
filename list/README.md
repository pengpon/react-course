# React JSX & 組件
## JSX

和 HTML 不同的地方:
1. 一定要 close
2. 所有的 tag 都可以 self close
3. class 要改使用 className (class 和定義組件的 class 撞名) / for 改使用 htmlFor
4. 事件使用駝峰式命名 onClick
5. 用大括號 `{}` 括住一個值或是表達式


## 組件
- 組件使用 Class 來定義
- 自己設計的組件一定要繼承 React 定義好的 Component 類別
- 每一個組件都會有 `render` 函式，`render` 函式會 return `JSX 物件`

```javascript
// 寫法一
import React, { Component } from 'react';
class Item extends Component {
    // ....
}

// 寫法二
import React from 'react';
class Item extends React.Component {
    // ....
}

```

## index.js
create-react-app 的進入點 `src/index.js`

＊ React 和 ReactDOM 是不同的 package

＊ `ReactDOM.render` 在 React 18 已棄用，須改用 `createRoot`


React 18 寫法範例：
```javascript
import { createRoot } from 'react-dom/client';
import List from './List';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<List/>)
```

React 17 寫法範例：
```javascript
import ReactDOM from'react-dom';
import List from './List';

ReactDOM.render(<List />, document.getElementById('root'));
```
