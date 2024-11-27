import { createHashRouter } from 'react-router-dom';

import { RootRoute } from './routes/rootRoute/RootRoute';
import { ErrorRoute } from './routes/errorRoute/ErrorRoute';
import { CountriesRoute } from './routes/countriesRoute';
import { CountryRoute } from './routes/countryRoute';

const router = createHashRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <CountriesRoute />,
            },
            {
                path: ':countryName',
                element: <CountryRoute />,
            },
        ],
    },
]);

export { router };
