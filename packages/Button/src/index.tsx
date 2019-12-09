import React, {
  ButtonHTMLAttributes
} from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { Base } from './styled';

type ReactButton = ButtonHTMLAttributes<HTMLButtonElement>

export interface Props extends ReactButton, SpaceProps, LayoutProps {
  appearance?: 'default' | 'primary' | 'minimal'
  intent?: string
  icon?: string
}

export function Button({
  appearance = 'default',
  intent = 'default',
  icon,
  children,
  ...props
}: Props) {
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
      type="button"
      {...props}
    >
      {renderIcon()}
      {children}
    </Base>
  );
}


export default Button;
