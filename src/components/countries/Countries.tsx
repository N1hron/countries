import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCountriesStatus } from '../../store/slices/countriesSlice/selectors';
import { fetchAllCountries } from '../../store/slices/countriesSlice/thunks';
import CountryFilter from './countryFilter/CountryFilter';
import CountryList from './countryList/CountryList';
import ShowMoreButton from './ShowMoreButton';
import StatusMessage from '../statusMessage/StatusMessage';

function Countries() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectCountriesStatus);

    useEffect(() => {
        dispatch(fetchAllCountries());
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
                <StatusMessage
                    status={status}
                    statusText={statusText}
                    style={{ margin: 'auto' }}
                />
            )}
        </>
    );
}

export default Countries;
