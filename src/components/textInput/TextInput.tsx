import { useRef, InputHTMLAttributes } from 'react';

import { Icon } from '../../types/icon';

import './textInput.scss';

type Props = {
    Icon?: Icon;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

function TextInput({ Icon, className = '', label, ...rest }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const cn = ('text-input ' + className).trim();

    return (
        <div className={cn} onClick={handleClick}>
            {Icon && <Icon className='text-input__icon' aria-hidden />}
            <input {...rest} ref={inputRef} aria-label={label} type='text' />
        </div>
    );
}

export default TextInput;
