import { Outlet } from 'react-router-dom';

import Container from '../container/Container';

import './main.scss';

function Main() {
    return (
        <main className='main'>
            <Container className='main__container'>
                <Outlet />
            </Container>
        </main>
    );
}

export default Main;
