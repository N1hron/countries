import useCountries from '../hooks/useCountries';
import StatusMessage from './statusMessage/StatusMessage';

function CountriesStatus() {
    const { status } = useCountries();

    const statusText = status === 'error' ? 'Could not load countries' : '';

    if (status === 'success') return null;
    return (
        <StatusMessage
            status={status}
            statusText={statusText}
            style={{ margin: 'auto' }}
        />
    );
}

export default CountriesStatus;
