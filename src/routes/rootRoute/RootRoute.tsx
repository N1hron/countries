import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

import './rootRoute.scss';

function RootRoute() {
    return (
        <div className='root-route'>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <ScrollRestoration getKey={(location) => location.pathname} />
        </div>
    );
}

export default RootRoute;
