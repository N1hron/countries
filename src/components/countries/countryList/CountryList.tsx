import { Country } from '../../../types/countries';
import { Status } from '../../../types/status';
import CountryCard from '../countryCard/CountryCard';

import './countryList.scss';

type Props = {
    status: Status;
    countries: Country[];
};

function CountryList({ status, countries }: Props) {
    function renderCountries() {
        return countries.map((country) => (
            <CountryCard key={country.nativeName} country={country} />
        ));
    }

    if (status !== 'success') return null;
    return <div className='country-list'>{renderCountries()}</div>;
}

export default CountryList;
