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

    return (
        <article className='country-card'>
            <img className='country-card__flag' src={country.flag} alt={country.name} />
            <div className='country-card__info'>
                <h3 className='country-card__info-title'>{country.name}</h3>
                <ul className='country-card__info-items'>{renderInfoItems()}</ul>
            </div>
        </article>
    );
}

export { CountryCard };
