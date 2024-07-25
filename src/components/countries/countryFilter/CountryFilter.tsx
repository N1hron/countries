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

type Props = {
    setRegion: (value: Region) => void;
    setSearch: (value: string) => void;
};

function CountryFilter({ setRegion, setSearch }: Props) {
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
