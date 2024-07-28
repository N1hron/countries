import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCountriesStatus } from '../../store/slices/countriesSlice/selectors';
import { fetchAllCountries } from '../../store/slices/countriesSlice/thunks';
import CountryFilter from './countryFilter/CountryFilter';
import CountryList from './countryList/CountryList';
import ShowMoreButton from './ShowMoreButton';
import CountriesStatus from './CountriesStatus';

function Countries() {
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectCountriesStatus);

    useEffect(() => {
        dispatch(fetchAllCountries());
    }, []);

    return (
        <>
            {status === 'success' ? (
                <>
                    <CountryFilter />
                    <CountryList />
                    <ShowMoreButton />
                </>
            ) : (
                <CountriesStatus status={status} />
            )}
        </>
    );
}

export default Countries;
