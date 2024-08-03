import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCountryByName } from '../../store/slices/countrySlice/thunks';
import { selectCountryStatus } from '../../store/slices/countrySlice/selectors';
import GoBackButton from '../buttons/GoBackButton';
import CountryDetails from './countryDetails/CountryDetails';
import CountryStatus from './CountryStatus';

function Country() {
    const dispatch = useAppDispatch();
    const { countryName } = useParams();
    const status = useAppSelector(selectCountryStatus);

    useEffect(() => {
        if (countryName) {
            dispatch(fetchCountryByName(countryName));
        }
    }, [countryName]);

    return (
        <>
            {status === 'success' ? (
                <>
                    <GoBackButton />
                    <CountryDetails />
                </>
            ) : (
                <CountryStatus status={status} />
            )}
        </>
    );
}

export default Country;
