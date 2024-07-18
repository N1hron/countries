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
            if (countries.length - limit > n) {
                dispatch(setLimit(limit + n));
            } else {
                dispatch(setLimit(countries.length));
            }
        }
    }

    const res = {
        status,
        countries: countries.slice(0, limit),
        limit: { current: limit, max: countries.length },
        increaseLimit,
    };

    return [res.status, res.countries, res.limit, res.increaseLimit] as const;
}

export default useCountries;
