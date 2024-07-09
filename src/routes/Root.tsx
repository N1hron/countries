import { Outlet } from 'react-router-dom';

import Container from '../components/container/Container';

function Root() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}

export default Root;
