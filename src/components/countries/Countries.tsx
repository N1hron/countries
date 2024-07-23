import { useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { fetchAllCountries } from '../../store/slices/countriesSlice';
import CountryFilter from './countryFilter/CountryFilter';
import CountryList from './countryList/CountryList';
import ShowMoreCountries from './ShowMoreCountries';
import CountriesStatus from './CountriesStatus';

function Countries() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllCountries());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <CountryFilter />
            <CountryList />
            <ShowMoreCountries />
            <CountriesStatus />
        </>
    );
}

export default Countries;
