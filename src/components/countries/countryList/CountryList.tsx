import { CountryInfo } from '../../../types/countries';
import { Status } from '../../../types/status';
import CountryCard from '../countryCard/CountryCard';
import { Link } from 'react-router-dom';

import './countryList.scss';

type Props = {
    status: Status;
    countries: CountryInfo[];
};

function CountryList({ status, countries }: Props) {
    function renderCountries() {
        return countries.map((country) => (
            <li key={country.nativeName}>
                <Link to={country.name}>
                    <CountryCard country={country} />
                </Link>
            </li>
        ));
    }

    if (status !== 'success') return null;
    return <ul className='country-list'>{renderCountries()}</ul>;
}

export default CountryList;
