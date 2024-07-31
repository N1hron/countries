import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './button/Button';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg?react';

const GoBackButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const navigate = useNavigate();

    return (
        <Button
            {...props}
            style={{ ...props.style, paddingLeft: '1.84rem' }}
            onClick={() => navigate(-1)}
        >
            <ArrowBackIcon />
            Back
        </Button>
    );
};

export default GoBackButton;
