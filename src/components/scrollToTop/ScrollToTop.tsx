import { useEffect, useState } from 'react';

import ArrowBack from '../../assets/icons/arrow-back.svg?react';
import { Button } from '../buttons/button/Button';

import './scrollToTop.scss';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    if (!isVisible) return null;
    return (
        <Button
            className='scroll-to-top'
            title='Scroll to the top'
            aria-label='Scroll to the top'
            onClick={handleClick}
        >
            <ArrowBack />
        </Button>
    );
}

export { ScrollToTop };
