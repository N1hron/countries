import { useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { fetchAllCountries } from '../../store/slices/countriesSlice';
import CountriesStatus from './CountriesStatus';
import CountriesList from './countriesList/CountriesList';
import ShowMoreCountries from './ShowMoreCountries';

function Countries() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllCountries());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <CountriesStatus />
            <CountriesList />
            <ShowMoreCountries />
        </>
    );
}

export default Countries;
