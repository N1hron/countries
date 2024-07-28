import useCountries from '../../hooks/useCountries';
import CountryFilter from './countryFilter/CountryFilter';
import CountryList from './countryList/CountryList';
import ShowMoreButton from './ShowMoreButton';
import CountriesStatus from './CountriesStatus';

function Countries() {
    const { countries, status, limit, increaseLimit, setRegion, setSearch } =
        useCountries();

    return (
        <>
            <CountryFilter setRegion={setRegion} setSearch={setSearch} />
            <CountryList countries={countries} status={status} />
            <ShowMoreButton
                status={status}
                limit={limit}
                increaseLimit={increaseLimit}
            />
            <CountriesStatus status={status} />
        </>
    );
}

export default Countries;
