import Button from './button/Button';
import ArrowBackIcon from '../../assets/icons/arrow-back.svg?react';

function GoBackButton() {
    return (
        <Button isLink to='../'>
            <ArrowBackIcon />
            Back
        </Button>
    );
}

export default GoBackButton;
