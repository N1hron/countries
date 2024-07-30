import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './routes/rootRoute/RootRoute';
import ErrorRoute from './routes/errorRoute/ErrorRoute';
import Countries from './components/countries/Countries';
import Country from './components/country/Country';

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
            {
                path: ':countryName',
                element: <Country />,
            },
        ],
    },
]);

export default router;
