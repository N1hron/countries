import { Country } from '../../types/countries';
import formatPopulation from '../../utils/formatPopulation';

type Props = {
    country: Country;
};

function CountryCard({ country }: Props) {
    return (
        <article className='countries__country-card'>
            <img
                className='countries__country-card-flag'
                src={country.flag}
                alt={country.name}
            />
            <div className='countries__country-card-info'>
                <h3 className='countries__country-card-info-title'>
                    {country.name}
                </h3>
                <ul className='countries__country-card-info-items'>
                    <li className='countries__country-card-info-item'>
                        Population:{' '}
                        <span>{formatPopulation(country.population)}</span>
                    </li>
                    <li className='countries__country-card-info-item'>
                        Region: <span>{country.region}</span>
                    </li>
                    <li className='countries__country-card-info-item'>
                        Capital: <span>{country.capital}</span>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default CountryCard;
