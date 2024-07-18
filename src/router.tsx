import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './routes/rootRoute/RootRoute';
import ErrorRoute from './routes/errorRoute/ErrorRoute';
import CountriesRoute from './routes/countriesRoute/CountriesRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <CountriesRoute />,
            },
        ],
    },
]);

export default router;
