import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './button/Button';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg?react';

function GoBackButton({
    to = -1,
    ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { to?: number }) {
    const navigate = useNavigate();

    return (
        <Button
            {...rest}
            style={{ ...rest.style, paddingLeft: '1.84rem' }}
            isLink={false}
            onClick={() => navigate(to)}
        >
            <ArrowBackIcon />
            Back
        </Button>
    );
}

export default GoBackButton;
