import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './routes/RootRoute';
import ErrorRoute from './routes/errorRoute/ErrorRoute';
import Countries from './components/countries/Countries';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <Countries />,
            },
        ],
    },
]);

export default router;
