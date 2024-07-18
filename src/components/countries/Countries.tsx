import useCountries from '../../hooks/useCountries';
import Container from '../container/Container';
import StatusMessage from '../statusMessage/StatusMessage';
import CountryCard from '../countryCard/CountryCard';
import Button from '../button/Button';

import './countries.scss';

function Countries() {
    const [status, countries, limit, increaseLimit] = useCountries();

    function renderCountries() {
        return countries.map((country) => (
            <CountryCard key={country.nativeName} country={country} />
        ));
    }

    const statusText = status === 'error' ? 'Could not load countries' : '';
    const canShowMore = limit.current < limit.max;

    return (
        <div className='countries'>
            <Container className='countries__container'>
                {status === 'success' ? (
                    <>
                        <div className='countries__country-cards'>
                            {renderCountries()}
                        </div>
                        {canShowMore && (
                            <Button
                                isLink={false}
                                onClick={() => increaseLimit()}
                                className='countries__show-more-btn'
                            >
                                Show more
                            </Button>
                        )}
                    </>
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
