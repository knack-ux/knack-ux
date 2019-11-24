import React, {
  ButtonHTMLAttributes
} from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import {
  variant,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from 'styled-system';

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

export const Base = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;

  font-family: 'Cabin';
  font-size: 16px;

  background: #F1F2F6;

  border: none;
  border-radius: 3px;

  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }

  & > *:nth-child(2) {
    margin-left: 8px;
  }

  ${({ theme }) => css`
    &:focus {
      box-shadow: 0 0 0 2px ${theme.focus};
    }
  `}

  ${space}
  ${layout}

  ${({ theme, intent }) => variant({
    prop: 'appearance',
    variants: {
      default: {
        border: '2px solid #CED6E0',
        background: '#FAFBFC',
        color: theme.colors[intent]
      },
      primary: {
        background: theme.colors[intent],
        color: 'white',
        '&:hover': {
          background: darken(
            0.1,
            theme.colors[intent]
          )
        }
      },
      minimal: {
        background: 'white',
        color: theme.colors[intent],
        '&:hover': {
          background: '#F1F2F6'
        }
      }
    }
  })}
`;


export default Button;
