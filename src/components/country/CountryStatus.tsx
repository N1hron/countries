import { Status } from '../../types/status';
import StatusMessage from '../status/statusMessage/StatusMessage';

type Props = {
    status: Status;
};

function CountryStatus({ status }: Props) {
    const statusText = status === 'error' ? 'Could not load country' : '';

    if (status === 'success') return null;
    return (
        <StatusMessage
            status={status}
            statusText={statusText}
            style={{ margin: 'auto' }}
        />
    );
}

export default CountryStatus;
