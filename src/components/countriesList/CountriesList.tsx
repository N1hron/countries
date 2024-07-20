import useCountries from '../../hooks/useCountries';
import CountryCard from '../countryCard/CountryCard';

import './countriesList.scss';

function CountriesList() {
    const { status, countries } = useCountries();

    function renderCountries() {
        return countries.map((country) => (
            <CountryCard key={country.nativeName} country={country} />
        ));
    }

    if (status !== 'success') return null;
    return <div className='countries-list'>{renderCountries()}</div>;
}

export default CountriesList;
