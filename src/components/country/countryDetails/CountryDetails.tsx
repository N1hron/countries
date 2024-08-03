import { useAppSelector } from '../../../store';
import { selectCountry } from '../../../store/slices/countrySlice/selectors';
import { CountryBorder } from './CountryBorder';

import './countryDetails.scss';

function CountryDetails() {
    const country = useAppSelector(selectCountry);

    if (!country) return null;

    const mainInfoItems = [
        {
            title: 'Native Name',
            description: country.nativeName,
        },
        {
            title: 'Population',
            description: country.population?.toLocaleString('en'),
        },
        {
            title: 'Region',
            description: country.region,
        },
        {
            title: 'Sub Region',
            description: country.subregion,
        },
        {
            title: 'Capital',
            description: country.capital,
        },
        {
            title: 'Top Level Domain',
            description: country.topLevelDomain,
        },
        {
            title: 'Currencies',
            description: country.currencies?.map((currency) => currency.name).join(', '),
        },
        {
            title: 'Languages',
            description: country.languages?.map((language) => language.name).join(', '),
        },
    ];

    const renderMainInfoItems = () => {
        return mainInfoItems.map(
            (item) =>
                item.description && (
                    <li key={item.title}>
                        <p>
                            {item.title}: <span>{item.description}</span>
                        </p>
                    </li>
                )
        );
    };

    const renderBorders = () => {
        return (
            country.borders && (
                <>
                    <span>Border Countries:</span>
                    {country.borders.map((countryCode) => (
                        <CountryBorder key={countryCode} countryCode={countryCode} />
                    ))}
                </>
            )
        );
    };

    return (
        <article className='country-details'>
            <img
                className='country-details__flag'
                src={country.flag}
                alt={country.name + ' flag'}
            />
            <div className='country-details__info'>
                <div className='country-details__info-main'>
                    <h1>{country.name}</h1>
                    <ul>{renderMainInfoItems()}</ul>
                </div>
                <div className='country-details__info-borders'>{renderBorders()}</div>
            </div>
        </article>
    );
}

export { CountryDetails };
