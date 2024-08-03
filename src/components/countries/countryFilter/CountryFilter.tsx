import SearchIcon from '../../../assets/icons/search.svg?react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setFilter } from '../../../store/slices/countriesSlice';
import { selectCountriesFilter } from '../../../store/slices/countriesSlice/selectors';
import { Region } from '../../../types/countries';
import { TextInput } from '../../controls/textInput/TextInput';
import { Select } from '../../controls/select/Select';

import './countryFilter.scss';

const selectOptions: Region[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function CountryFilter() {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectCountriesFilter);

    function setSearch(newSearch: string) {
        if (filter.search !== newSearch) {
            dispatch(setFilter({ ...filter, search: newSearch }));
        }
    }

    function setRegion(newRegion: typeof filter.region) {
        if (filter.region !== newRegion) {
            dispatch(setFilter({ ...filter, region: newRegion }));
        }
    }

    return (
        <form className='country-filter'>
            <TextInput
                Icon={SearchIcon}
                label='Enter country name'
                placeholder='Search for a country...'
                className='country-filter__search'
                value={filter.search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <Select
                label='Filter by Region'
                options={selectOptions}
                defaultOption={filter.region}
                onChange={(region) => setRegion(region)}
                className='country-filter__region'
            />
        </form>
    );
}

export { CountryFilter };
