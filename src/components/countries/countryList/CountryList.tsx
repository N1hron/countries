import useCountries from '../../../hooks/useCountries';
import CountryCard from '../countryCard/CountryCard';

import './countryList.scss';

function CountryList() {
    const { status, countries } = useCountries();

    function renderCountries() {
        return countries.map((country) => (
            <CountryCard key={country.nativeName} country={country} />
        ));
    }

    if (status !== 'success') return null;
    return <div className='country-list'>{renderCountries()}</div>;
}

export default CountryList;
