import { Country } from '../../../types/countries';
import formatPopulation from '../../../utils/formatPopulation';

import './countryCard.scss';

type Props = {
    country: Country;
};

function CountryCard({ country }: Props) {
    return (
        <article tabIndex={0} className='country-card'>
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
                        <span>{formatPopulation(country.population)}</span>
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
