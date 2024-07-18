import { useAppDispatch, useAppSelector } from '../store';
import { setLimit } from '../store/slices/countriesSlice';
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
