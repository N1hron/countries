import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { fetchAllCountries } from '../store/slices/countriesSlice';
import {
    selectAllCountries,
    selectCountriesStatus,
} from '../store/slices/countriesSlice/selectors';

function useCountries() {
    const dispatch = useAppDispatch();
    const countries = useAppSelector(selectAllCountries);
    const status = useAppSelector(selectCountriesStatus);

    useEffect(() => {
        dispatch(fetchAllCountries());
    }, []);

    return [status, countries] as const;
}

export default useCountries;
