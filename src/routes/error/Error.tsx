import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import useTheme from '../../hooks/useTheme';
import StatusMessage from '../../components/statusMessage/StatusMessage';
import Button from '../../components/button/Button';

import './error.scss';

function Error() {
    useTheme();
    const error = useRouteError();

    const isRouteError = isRouteErrorResponse(error);

    const statusCode = isRouteError ? error.status : undefined;
    const statusText = isRouteError ? error.statusText : 'Unexpected error';

    return (
        <div className='error'>
            <div className='error__container'>
                <StatusMessage
                    status='error'
                    statusCode={statusCode}
                    statusText={statusText}
                />
                {isRouteError && (
                    <Button isLink to={'/'}>
                        Go home
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Error;
