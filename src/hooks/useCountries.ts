import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store';
import {
    setLimit,
    setFilter,
    fetchAllCountries,
} from '../store/slices/countriesSlice';
import {
    selectAllCountries,
    selectCountriesStatus,
    selectCountriesLimit,
    selectCountriesFilter,
} from '../store/slices/countriesSlice/selectors';

function useCountries() {
    const dispatch = useAppDispatch();

    const countries = useAppSelector(selectAllCountries);
    const status = useAppSelector(selectCountriesStatus);
    const limit = useAppSelector(selectCountriesLimit);
    const filter = useAppSelector(selectCountriesFilter);

    useEffect(() => {
        dispatch(fetchAllCountries());
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(setLimit(Math.min(filteredCountries.length, 8)));
    }, [filter]);

    const filteredCountries = countries.filter(
        ({ region, name }) =>
            (filter.region === 'All' || region === filter.region) &&
            name.match(new RegExp(filter.search, 'i'))
    );
    const maxLimit = filteredCountries.length;

    function increaseLimit() {
        let newLimit = limit + 8;

        if (newLimit > maxLimit) {
            newLimit = maxLimit;
        } else if (newLimit < 1) {
            newLimit = Math.min(1, maxLimit);
        }

        dispatch(setLimit(newLimit));
    }

    function setSearch(value: typeof filter.search) {
        dispatch(setFilter({ ...filter, search: value }));
    }

    function setRegion(value: typeof filter.region) {
        dispatch(setFilter({ ...filter, region: value }));
    }

    return {
        countries: filteredCountries.slice(0, limit),
        status,
        limit: { current: limit, max: maxLimit },
        increaseLimit,
        setSearch,
        setRegion,
    };
}

export default useCountries;
