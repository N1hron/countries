import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import router from './router';
import store from './store';

import './scss/main.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    </StrictMode>
);
