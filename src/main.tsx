import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './scss/main.scss';

const root = createRoot(document.getElementById('root')!);

root.render(<StrictMode></StrictMode>);
