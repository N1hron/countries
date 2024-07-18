import useCountries from '../../hooks/useCountries';
import Container from '../container/Container';
import StatusMessage from '../statusMessage/StatusMessage';
import CountryCard from './CountryCard';

import './countries.scss';

function Countries() {
    const [status, countries, limit] = useCountries();

    function renderCountries() {
        return countries
            .slice(0, limit)
            .map((country) => (
                <CountryCard key={country.nativeName} country={country} />
            ));
    }

    const statusText = status === 'error' ? 'Could not load countries' : '';

    return (
        <div className='countries'>
            <Container className='countries__container'>
                {status === 'success' ? (
                    <div className='countries__country-cards'>
                        {renderCountries()}
                    </div>
                ) : (
                    <StatusMessage
                        status={status}
                        statusText={statusText}
                        className='countries__status-message'
                    />
                )}
            </Container>
        </div>
    );
}

export default Countries;
