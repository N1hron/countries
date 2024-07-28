import { useAppDispatch, useAppSelector } from '../../../store';
import { selectCountriesFilter } from '../../../store/slices/countriesSlice/selectors';
import { setFilter } from '../../../store/slices/countriesSlice';
import { defaultRegion } from '../../../store/slices/countriesSlice';
import { Region } from '../../../types/countries';
import TextInput from '../../textInput/TextInput';
import SearchIcon from '../../../assets/icons/search.svg?react';
import Select from '../../select/Select';

import './countryFilter.scss';

const selectOptions: Region[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
];

function CountryFilter() {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectCountriesFilter);

    function setSearch(value: typeof filter.search) {
        dispatch(setFilter({ ...filter, search: value }));
    }

    function setRegion(value: typeof filter.region) {
        dispatch(setFilter({ ...filter, region: value }));
    }

    return (
        <form className='country-filter'>
            <TextInput
                Icon={SearchIcon}
                label='Enter country name'
                placeholder='Search for a country...'
                className='country-filter__search'
                onChange={(event) => setSearch(event.target.value)}
            />
            <Select
                label='Filter by Region'
                options={selectOptions}
                defaultOption={defaultRegion}
                onChange={(region) => setRegion(region)}
            />
        </form>
    );
}

export default CountryFilter;
