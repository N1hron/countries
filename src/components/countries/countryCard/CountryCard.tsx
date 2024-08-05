import { MouseEventHandler } from 'react';
import { CountryInfo } from '../../../types/countries';

import './countryCard.scss';

type Props = {
    country: CountryInfo;
};

function CountryCard({ country }: Props) {
    const infoItems = [
        {
            title: 'Population',
            description: country.population?.toLocaleString('en'),
        },
        {
            title: 'Region',
            description: country.region,
        },
        {
            title: 'Capital',
            description: country.capital,
        },
    ];

    const renderInfoItems = () => {
        return infoItems.map(
            (item) =>
                item.description && (
                    <li key={item.title} className='country-card__info-item'>
                        <p>
                            {item.title}: <span>{item.description}</span>
                        </p>
                    </li>
                )
        );
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
        if (prefersReducedMotion) return;

        const card = event.currentTarget;
        const cardContent = card.querySelector('.country-card__content') as HTMLDivElement;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const width = rect.width;
        const height = rect.height;

        const multiplier = 0.075;

        const rotateXDeg = -((y - height / 2) / (height / 2)) * 100 * multiplier;
        const rotateYDeg = ((x - width / 2) / (width / 2)) * 100 * multiplier;

        const perspective = 45;

        console.log(width / (200 - Math.sin(rotateXDeg) * height));
        cardContent.style.transform = `perspective(${perspective}rem) rotateY(${rotateYDeg}deg) rotateX(${rotateXDeg}deg)`;
    };

    const handleMouseLeave: MouseEventHandler<HTMLElement> = (event) => {
        if (prefersReducedMotion) return;

        const card = event.currentTarget;
        const cardContent = card.querySelector('.country-card__content') as HTMLDivElement;

        cardContent.style.transform = '';
    };

    return (
        <article
            className='country-card'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className='country-card__content'>
                <img className='country-card__flag' src={country.flag} alt={country.name} />
                <div className='country-card__info'>
                    <h3 className='country-card__info-title'>{country.name}</h3>
                    <ul className='country-card__info-items'>{renderInfoItems()}</ul>
                </div>
            </div>
        </article>
    );
}

export { CountryCard };
