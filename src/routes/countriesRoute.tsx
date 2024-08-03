import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { selectCountriesStatus } from '../store/slices/countriesSlice/selectors';
import { fetchAllCountries } from '../store/slices/countriesSlice/thunks';
import { CountryFilter } from '../components/countries/countryFilter/CountryFilter';
import { CountryList } from '../components/countries/countryList/CountryList';
import { ShowMoreButton } from '../components/countries/ShowMoreButton';
import { StatusMessage } from '../components/status/statusMessage/StatusMessage';

function CountriesRoute() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectCountriesStatus);

    useEffect(() => {
        dispatch(fetchAllCountries());

        // eslint-disable-next-line
    }, []);

    const statusText = status === 'error' ? 'Could not load countries' : '';

    return (
        <>
            {status === 'success' ? (
                <>
                    <CountryFilter />
                    <CountryList />
                    <ShowMoreButton />
                </>
            ) : (
                <StatusMessage status={status} statusText={statusText} style={{ margin: 'auto' }} />
            )}
        </>
    );
}

export { CountriesRoute };
