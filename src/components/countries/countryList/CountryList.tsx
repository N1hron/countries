import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import {
    selectCountries,
    selectCountriesLimit,
} from '../../../store/slices/countriesSlice/selectors';
import { CountryCard } from '../countryCard/CountryCard';

import './countryList.scss';

function CountryList() {
    const countries = useAppSelector(selectCountries);
    const limit = useAppSelector(selectCountriesLimit);
    const firstNewCountry = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (limit.previous > 0 && firstNewCountry.current) {
            firstNewCountry.current.focus();
            firstNewCountry.current.blur();
        }
    }, [limit.previous]);

    function renderCountries() {
        return countries.map((country, i) => (
            <li key={country.name}>
                <Link to={country.name} ref={i === limit.previous ? firstNewCountry : undefined}>
                    <CountryCard country={country} />
                </Link>
            </li>
        ));
    }

    return <ul className='country-list'>{renderCountries()}</ul>;
}

export { CountryList };
