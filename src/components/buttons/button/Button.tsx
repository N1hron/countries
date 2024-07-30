import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './button.scss';

type CommonProps<T extends boolean> = {
    isLink: T;
    mini?: boolean;
};

type Props<T extends boolean> = T extends true
    ? CommonProps<T> & LinkProps
    : CommonProps<T> & ButtonHTMLAttributes<HTMLButtonElement>;

function Button<T extends boolean>(
    { isLink, className = '', mini = false, ...restProps }: Props<T>,
    ref: ForwardedRef<HTMLButtonElement>
) {
    const cn = (`button ${mini ? 'button_mini' : ''}` + className).trim();

    if (isLink) {
        const rest = restProps as Omit<Props<true>, 'isLink' | 'className'>;

        return <Link {...rest} draggable={false} className={cn} />;
    } else {
        const rest = restProps as Omit<Props<false>, 'isLink' | 'className'>;

        return <button {...rest} ref={ref} draggable={false} className={cn} />;
    }
}

export default forwardRef(Button);
