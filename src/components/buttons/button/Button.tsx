import { ButtonHTMLAttributes, Ref, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLink?: false;
    mini?: boolean;
};

type LinkButtonProps = LinkProps & {
    isLink: true;
    mini?: boolean;
};

type Props = ButtonProps | LinkButtonProps;

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element;
function Button(props: LinkButtonProps, ref: Ref<HTMLAnchorElement>): JSX.Element;

function Button(props: Props, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) {
    const cn = (
        'button ' +
        (props.mini ? 'button_mini ' : '') +
        (props.className ? props.className : '')
    ).trim();

    if (props.isLink) {
        // eslint-disable-next-line
        const { isLink, mini, ...linkProps } = props as LinkButtonProps;

        return <Link {...linkProps} ref={ref as Ref<HTMLAnchorElement>} className={cn} />;
    } else {
        // eslint-disable-next-line
        const { isLink, mini, ...buttonProps } = props as ButtonProps;

        return <button {...buttonProps} ref={ref as Ref<HTMLButtonElement>} className={cn} />;
    }
}

const ButtonWithRef = forwardRef(Button) as unknown as typeof Button;

export { ButtonWithRef as Button };
