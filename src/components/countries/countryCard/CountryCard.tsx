import { CountryInfo } from '../../../types/countries';

import './countryCard.scss';

type Props = {
    country: CountryInfo;
};

function CountryCard({ country }: Props) {
    return (
        <article className='country-card'>
            <img
                className='country-card__flag'
                src={country.flag}
                alt={country.name}
            />
            <div className='country-card__info'>
                <h3 className='country-card__info-title'>{country.name}</h3>
                <ul className='country-card__info-items'>
                    <li className='country-card__info-item'>
                        Population:{' '}
                        <span>{country.population.toLocaleString('en')}</span>
                    </li>
                    <li className='country-card__info-item'>
                        Region: <span>{country.region}</span>
                    </li>
                    <li className='country-card__info-item'>
                        Capital: <span>{country.capital}</span>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default CountryCard;
