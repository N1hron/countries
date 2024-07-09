import { Link } from 'react-router-dom';

import Container from '../container/Container';

import './header.scss';

function Header() {
    return (
        <header className='header'>
            <Container className='header__container'>
                <Link className='header__title' to='/'>
                    Where in the world?
                </Link>
                {/* <div>Switch Theme</div> */}
            </Container>
        </header>
    );
}

export default Header;
