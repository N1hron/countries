import { createBrowserRouter } from 'react-router-dom';

import Root from './routes/Root';
import Error from './routes/error/Error';
import Countries from './components/countries/Countries';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Countries />,
            },
        ],
    },
]);

export default router;
