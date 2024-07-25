import useCountries from '../../hooks/useCountries';
import CountryFilter from './countryFilter/CountryFilter';
import CountryList from './countryList/CountryList';
import ShowMoreCountries from './ShowMoreCountries';
import CountriesStatus from './CountriesStatus';

function Countries() {
    const { countries, status, limit, increaseLimit, setRegion, setSearch } =
        useCountries();

    return (
        <>
            <CountryFilter setRegion={setRegion} setSearch={setSearch} />
            <CountryList countries={countries} status={status} />
            <ShowMoreCountries
                status={status}
                limit={limit}
                increaseLimit={increaseLimit}
            />
            <CountriesStatus status={status} />
        </>
    );
}

export default Countries;
