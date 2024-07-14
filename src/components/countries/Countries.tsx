import useCountries from '../../hooks/useCountries';
import Container from '../container/Container';
import CountryCard from './CountryCard';

import './countries.scss';

function Countries() {
    const [status, countries, limit] = useCountries();

    return (
        <Container>
            <div className='countries'>
                {status === 'success' && <CountryCard country={countries[2]} />}
            </div>
        </Container>
    );
}

export default Countries;
