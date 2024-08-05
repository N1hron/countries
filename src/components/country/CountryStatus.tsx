import { useAppSelector } from '../../store';
import { selectCountryStatusCode } from '../../store/slices/countrySlice/selectors';
import { Status } from '../../types/status';
import { StatusMessage } from '../status/statusMessage/StatusMessage';

type Props = {
    status: Status;
};

function CountryStatus({ status }: Props) {
    const statusCode = useAppSelector(selectCountryStatusCode) || undefined;
    const statusText = setStatusText();

    function setStatusText() {
        if (status === 'error') {
            return statusCode === '404' ? `Such country does not exist` : 'Could not load country';
        } else {
            return '';
        }
    }

    if (status === 'success') return null;
    return (
        <StatusMessage
            status={status}
            statusCode={statusCode}
            statusText={statusText}
            style={{ margin: 'auto' }}
        />
    );
}

export { CountryStatus };
