import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { fetchAllCountries } from '../store/slices/countriesSlice';
import {
    selectAllCountries,
    selectCountriesStatus,
    selectLimit,
} from '../store/slices/countriesSlice/selectors';

function useCountries() {
    const dispatch = useAppDispatch();

    const countries = useAppSelector(selectAllCountries);
    const status = useAppSelector(selectCountriesStatus);
    const limit = useAppSelector(selectLimit);

    useEffect(() => {
        dispatch(fetchAllCountries());
        // eslint-disable-next-line
    }, []);

    return [status, countries, limit] as const;
}

export default useCountries;
