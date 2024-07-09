import { ReactNode, CSSProperties } from 'react';

import './container.scss';

interface Props {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
}

function Container({ children, style, className }: Props) {
    const cn = 'container' + (className ? ` ${className}` : '');

    return (
        <div className={cn} style={style}>
            {children}
        </div>
    );
}

export default Container;
