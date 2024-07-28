import { Outlet } from 'react-router-dom';

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
        </div>
    );
}

export default RootRoute;
