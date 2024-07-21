import { FunctionComponent, SVGProps } from 'react';

export type Icon = FunctionComponent<
    SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;
