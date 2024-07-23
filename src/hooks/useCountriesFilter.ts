import { useAppSelector, useAppDispatch } from '../store';
import { selectCountriesFilter } from '../store/slices/countriesSlice/selectors';
import { setFilter } from '../store/slices/countriesSlice';

function useCountriesFilter() {
    const dispatch = useAppDispatch();

    const filter = useAppSelector(selectCountriesFilter);

    function setSearch(value: typeof filter.search) {
        dispatch(setFilter({ ...filter, search: value }));
    }

    function setRegion(value: typeof filter.region) {
        dispatch(setFilter({ ...filter, region: value }));
    }

    return {
        ...filter,
        setSearch,
        setRegion,
    };
}

export default useCountriesFilter;
