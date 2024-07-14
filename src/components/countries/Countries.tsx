import useCountries from '../../hooks/useCountries';
import Container from '../container/Container';
import CountryCard from './CountryCard';

import './countries.scss';

function Countries() {
    const [status, countries, limit] = useCountries();

    function renderCountries() {
        switch (status) {
            case 'loading':
                return 'Loading...';
            case 'error':
                return 'Error';
            case 'idle':
                return null;
            case 'success':
                return countries
                    .slice(0, limit)
                    .map((country) => (
                        <CountryCard
                            key={country.nativeName}
                            country={country}
                        />
                    ));
        }
    }

    return (
        <Container>
            <div className='countries'>
                <div className='countries__country-cards'>
                    {renderCountries()}
                </div>
            </div>
        </Container>
    );
}

export default Countries;
