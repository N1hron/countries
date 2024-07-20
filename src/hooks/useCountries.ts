import { useAppDispatch, useAppSelector } from '../store';
import { setLimit } from '../store/slices/countriesSlice';
import {
    selectAllCountries,
    selectCountriesStatus,
    selectCountriesLimit,
} from '../store/slices/countriesSlice/selectors';

function useCountries() {
    const dispatch = useAppDispatch();

    const countries = useAppSelector(selectAllCountries);
    const status = useAppSelector(selectCountriesStatus);
    const limit = useAppSelector(selectCountriesLimit);

    function increaseLimit(n: number = 8) {
        dispatch(setLimit(limit + n));
    }

    return {
        countries: countries.slice(0, limit),
        status,
        limit: { current: limit, max: countries.length },
        increaseLimit,
    };
}

export default useCountries;
