import { useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { fetchAllCountries } from '../../store/slices/countriesSlice';
import Container from '../../components/container/Container';
import CountriesList from '../../components/countriesList/CountriesList';
import ShowMoreCountries from '../../components/ShowMoreCountries';
import CountriesStatus from '../../components/CountriesStatus';

import './countriesRoute.scss';

function CountriesRoute() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllCountries());
        // eslint-disable-next-line
    }, []);

    return (
        <div className='countries-route'>
            <Container className='countries-route__container'>
                <CountriesStatus />
                <CountriesList />
                <ShowMoreCountries />
            </Container>
        </div>
    );
}

export default CountriesRoute;
