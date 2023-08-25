import { createRoot } from 'react-dom/client';
import Calculator from './Calculator';
import './calculator.css';

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<Calculator />)
