import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root';
import Countries from './components/countries/Countries';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Countries />,
            },
        ],
    },
]);

export default router;
