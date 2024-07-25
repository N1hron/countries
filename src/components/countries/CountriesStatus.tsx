import { Status } from '../../types/status';
import StatusMessage from '../statusMessage/StatusMessage';

type Props = {
    status: Status;
};

function CountriesStatus({ status }: Props) {
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
