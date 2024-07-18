import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import { fetchAllCountries, setLimit } from '../store/slices/countriesSlice';
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

    function increaseLimit(n: number = 8) {
        if (limit < countries.length) {
            dispatch(setLimit(limit + n));
        }
    }

    return [status, countries, limit, increaseLimit] as const;
}

export default useCountries;
