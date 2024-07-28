import { ReactNode } from 'react';

import Container from '../container/Container';

import './main.scss';

type Props = {
    children?: ReactNode;
};

function Main({ children }: Props) {
    return (
        <main className='main'>
            <Container className='main__container'>{children}</Container>
        </main>
    );
}

export default Main;
