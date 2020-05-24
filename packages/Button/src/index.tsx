import React, { forwardRef, Ref, ComponentPropsWithRef } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import Icon from '@knack-ux/icon';

import { ButtonBase } from './styled';

type ReactButton = ComponentPropsWithRef<'button'>

export interface Props extends ReactButton, SpaceProps, LayoutProps {
  appearance?: 'default' | 'primary' | 'minimal'
  intent?: string
  icon?: string
  iconRight?: string
  circular?: boolean
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>((
  {
    appearance = 'default',
    intent = 'info',
    icon,
    iconRight,
    children,
    disabled,
    onClick,
    ...props
  },
  ref
) => (
  <ButtonBase
    intent={intent}
    appearance={appearance}
    aria-disabled={disabled}
    type="button"
    ref={ref}
    onClick={!disabled ? onClick : () => {}}
    {...props}
  >
    {icon && (
      <Icon
        icon={icon}
        mr={children ? '8px' : '0'}
      />
    )}
    {children}
    {iconRight && (
      <Icon
        icon={iconRight}
        ml="8px"
      />
    )}
  </ButtonBase>
));


export default Button;
