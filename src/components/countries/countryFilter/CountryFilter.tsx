import { ChangeEventHandler } from 'react';

import useCountriesFilter from '../../../hooks/useCountriesFilter';
import { Region } from '../../../types/countries';
import TextInput from '../../textInput/TextInput';
import SearchIcon from '../../../assets/icons/search.svg?react';
import Select from '../../select/Select';

import './countryFilter.scss';

const selectOptions: Region[] = [
    'All',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
];

function CountryFilter() {
    const { setRegion, setSearch } = useCountriesFilter();

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setSearch(event.target.value);
    };

    const handleRegionChange = (value: Region) => {
        setRegion(value);
    };

    return (
        <form className='country-filter'>
            <TextInput
                Icon={SearchIcon}
                label='Enter country name'
                placeholder='Search for a country...'
                className='country-filter__search'
                onChange={handleSearchChange}
            />
            <Select
                label='Filter by Region'
                options={selectOptions}
                onChange={handleRegionChange}
            />
        </form>
    );
}

export default CountryFilter;
