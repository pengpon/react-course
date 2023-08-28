import { createRoot } from 'react-dom/client';
import Parent from './Parent';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Parent />);