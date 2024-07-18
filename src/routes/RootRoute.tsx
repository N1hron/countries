import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';

function RootRoute() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootRoute;
