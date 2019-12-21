import styled, { css } from 'styled-components';
import { variant, layout, space } from 'styled-system';

import { Props } from '.';


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
  transition: background 0.2s;

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
        border: '2px solid #EBECF0',
        background: '#FAFBFC',
        color: theme.a11y[intent],
        ':hover': {
          background: '#EBECF0'
        }
      },
      primary: {
        background: theme.colors[intent],
        color: 'white',
        '&:hover': {
          background: shade(
            0.2,
            theme.colors[intent]
          )
        }
      },
      minimal: {
        background: 'white',
        color: theme.a11y[intent],
        '&:hover': {
          background: '#EBECF0'
        }
      }
    }
  })}

  ${({ disabled }) => (
    disabled && css`
      color: #6B778C;
      background: #EBECF0;

      &:hover {
        color: #6B778C;
        background: #EBECF0;
        cursor: not-allowed;
      }
    `
  )}
`;
