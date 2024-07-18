import useCountries from '../../hooks/useCountries';
import Container from '../container/Container';
import StatusMessage from '../statusMessage/StatusMessage';
import CountryCard from '../countryCard/CountryCard';
import Button from '../button/Button';

import './countriesList.scss';

function CountriesList() {
    const [status, countries, limit, increaseLimit] = useCountries();

    function renderCountries() {
        return countries.map((country) => (
            <CountryCard key={country.nativeName} country={country} />
        ));
    }

    const statusText = status === 'error' ? 'Could not load countries' : '';
    const canShowMore = limit.current < limit.max;

    return (
        <div className='countries-list'>
            <Container className='countries-list__container'>
                {status === 'success' ? (
                    <>
                        <div className='countries-list__cards'>
                            {renderCountries()}
                        </div>
                        {canShowMore && (
                            <Button
                                isLink={false}
                                onClick={() => increaseLimit()}
                                className='countries-list__show-more-btn'
                            >
                                Show more
                            </Button>
                        )}
                    </>
                ) : (
                    <StatusMessage
                        status={status}
                        statusText={statusText}
                        className='countries-list__status-message'
                    />
                )}
            </Container>
        </div>
    );
}

export default CountriesList;
