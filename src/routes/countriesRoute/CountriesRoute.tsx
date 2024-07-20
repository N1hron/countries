import Container from '../../components/container/Container';
import Countries from '../../components/countries/Countries';

import './countriesRoute.scss';

function CountriesRoute() {
    return (
        <div className='countries-route'>
            <Container className='countries-route__container'>
                <Countries />
            </Container>
        </div>
    );
}

export default CountriesRoute;
