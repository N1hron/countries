import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './routes/rootRoute/RootRoute';
import ErrorRoute from './routes/errorRoute/ErrorRoute';
import CountriesList from './components/countriesList/CountriesList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <CountriesList />,
            },
        ],
    },
]);

export default router;
