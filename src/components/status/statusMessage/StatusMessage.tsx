import { CSSProperties } from 'react';

import { Status } from '../../../types/status';
import { StatusIcon } from '../statusIcon/StatusIcon';

import './statusMessage.scss';

type Props = {
    status: Status;
    statusCode?: string | number;
    statusText?: string;
    style?: CSSProperties;
    className?: string;
};

function StatusMessage({ status, statusCode, statusText, style, className = '' }: Props) {
    const cn = ('status-message ' + className).trim();

    return (
        <div style={style} className={cn}>
            <div className='status-message__status'>
                <StatusIcon status={status} className='status-message__icon' />
                {statusCode && <span className='status-message__code'>{statusCode}</span>}
            </div>
            {statusText && <p className='status-message__text'>{statusText}</p>}
        </div>
    );
}

export { StatusMessage };
