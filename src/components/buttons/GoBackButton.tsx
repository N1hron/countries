import { LinkProps } from 'react-router-dom';

import Button from './button/Button';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg?react';

function GoBackButton(props: Omit<LinkProps, 'to'>) {
    return (
        <Button
            {...props}
            style={{ ...props.style, paddingLeft: '1.84rem' }}
            isLink
            to='../'
        >
            <ArrowBackIcon />
            Back
        </Button>
    );
}

export default GoBackButton;
