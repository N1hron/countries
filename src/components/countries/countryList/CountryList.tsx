import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import { selectCountries } from '../../../store/slices/countriesSlice/selectors';
import CountryCard from '../countryCard/CountryCard';

import './countryList.scss';

function CountryList() {
    const countries = useAppSelector(selectCountries);

    function renderCountries() {
        return countries.map((country) => (
            <li key={country.nativeName}>
                <Link to={country.name}>
                    <CountryCard country={country} />
                </Link>
            </li>
        ));
    }

    return <ul className='country-list'>{renderCountries()}</ul>;
}

export default CountryList;
