// import ReactDOM from'react-dom';
import { createRoot } from 'react-dom/client';
import List from './List';

// React 17 以前寫法
// ReactDOM.render(<List />, document.getElementById('root'))

// React 18 寫法
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<List/>)

// 備註：
// List 是一個組件，型態是 class
// <List /> 是一個元素，型態是物件
