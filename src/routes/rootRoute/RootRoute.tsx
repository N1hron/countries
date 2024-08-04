import { ScrollRestoration } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { Main } from '../../components/main/Main';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';

import './rootRoute.scss';

function RootRoute() {
    return (
        <div className='root-route'>
            <Header />
            <Main />
            <ScrollToTop />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </div>
    );
}

export { RootRoute };
