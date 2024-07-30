import { SVGProps } from 'react';

import LoadingIcon from '../../../assets/icons/reload.svg?react';
import IdleIcon from '../../../assets/icons/info.svg?react';
import SuccessIcon from '../../../assets/icons/checkmark.svg?react';
import ErrorIcon from '../../../assets/icons/cross.svg?react';
import { Status } from '../../../types/status';

import './statusIcon.scss';

interface Props extends SVGProps<SVGSVGElement> {
    status: Status;
}

const titles: Record<Status, string> = {
    error: 'An error occured',
    idle: 'Useful information',
    success: 'Success!',
    loading: 'Loading, please wait',
};

function StatusIcon({ status, className = '', ...rest }: Props) {
    const InitialIcon = getInitialIcon();
    const cn = (`status-icon status-icon_${status} ` + className).trim();

    function getInitialIcon() {
        switch (status) {
            case 'idle':
                return IdleIcon;
            case 'loading':
                return LoadingIcon;
            case 'error':
                return ErrorIcon;
            case 'success':
                return SuccessIcon;
        }
    }

    return <InitialIcon {...rest} className={cn} title={titles[status]} />;
}

export default StatusIcon;
