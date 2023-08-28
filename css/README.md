# CSS 方案


## 1.單純引入 CSS
1. 建立一個和組件名稱一樣的 css
2. 例如：MyBtutton 組件建立 `MyButton.css`
3. 在組件中 import css
4. 設定 className，例如`className={btn}`

＊安裝 node-sass 即可使用 scss 語法

**缺點：容易撞名**


## 2.CSS Modules
1. 將 css 副檔名改成 `.module.css`; 例如： `MyButton.module.css`
2. 在組件中 `import style from './MyButton.module.css'`
3. className 用大括號 `{style.btn}` or `{style['btn-text']}`

＊安裝 node-sass 即可使用 scss 語法

## 3.styled components

不用另外寫一隻 css 檔案，推薦使用

1. install `styled-components`
2. 組件中 `import styled from'styled-components'`

```javascript
import React from 'react';
import styled from'styled-components';

//  將 Button 當作組件來用
const Button = styled.button `
    color: blue
`;
const OtherButton = () => {
    return (
        <Button>OtherButton</Button>
    )
}

export default OtherButton;
```
