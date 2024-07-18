import { Outlet } from 'react-router-dom';

import Header from '../../components/header/Header';

import './rootRoute.scss';

function RootRoute() {
    return (
        <div className='root-route'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootRoute;
