import { StandardProps } from '@material-ui/core';
import { ButtonClassKey, ButtonProps } from '@material-ui/core/Button';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import * as React from 'react';


declare module '@material-ui/core/Button' {
    export interface ButtonProps extends StandardProps<ButtonBaseProps, ButtonClassKey, 'component'> {
        children?: Array<string | Element>;
        'aria-owns'?: string | undefined;
        'aria-haspopup'?: 'true';
        onClick?: (event: any) => void;
        className?: any;
        border?: number;
    }

    declare const Button: React.ComponentType<ButtonProps>;

    export default Button;
}