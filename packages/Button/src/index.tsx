import React, {
  ButtonHTMLAttributes, forwardRef, Ref
} from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { Base } from './styled';

type ReactButton = ButtonHTMLAttributes<HTMLButtonElement>

export interface Props extends ReactButton, SpaceProps, LayoutProps {
  appearance?: 'default' | 'primary' | 'minimal'
  intent?: string
  icon?: string
  ref?: Ref<HTMLButtonElement>
  circular?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>((
  {
    appearance = 'default',
    intent = 'info',
    icon,
    children,
    disabled,
    ...props
  },
  ref
) => {
  function renderIcon() {
    return icon && (
      <i
        className="material-icons-round"
        style={{ marginRight: children ? '8px' : 0 }}
      >
        {icon}
      </i>
    );
  }

  return (
    <Base
      intent={intent}
      appearance={appearance}
      aria-disabled={disabled}
      type="button"
      ref={ref}
      {...props}
    >
      {renderIcon()}
      {children}
    </Base>
  );
});


export default Button;
