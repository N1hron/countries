import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../store';
import { fetchCountryByName } from '../store/slices/countrySlice/thunks';
import { selectCountryStatus } from '../store/slices/countrySlice/selectors';
import { GoBackButton } from '../components/buttons/GoBackButton';
import { CountryDetails } from '../components/country/countryDetails/CountryDetails';
import { CountryStatus } from '../components/country/CountryStatus';

function CountryRoute() {
    const dispatch = useAppDispatch();
    const { countryName } = useParams();
    const status = useAppSelector(selectCountryStatus);

    useEffect(() => {
        if (countryName) {
            dispatch(fetchCountryByName(countryName));
        }

        // eslint-disable-next-line
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

export { CountryRoute };
