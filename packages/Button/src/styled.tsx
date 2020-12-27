import styled, { css } from 'styled-components';
import { variant, layout, space } from 'styled-system';
import { shade } from 'polished';
import { Props } from '.';

export const ButtonBase = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 48px;
  padding: 0 22px; // 22px + 2px padding = 24px

  font-family: 'Cabin';
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  background: #F1F2F6;
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background 0.2s;

  &::-moz-focus-inner {
    border: 0;
  }

  ${({ theme }) => css`
    &:focus {
      outline: 3px solid ${theme.focus};
    }
  `}

  ${({ theme, intent }) => variant({
    prop: 'appearance',
    variants: {
      default: {
        border: '2px solid #E1E2E6',
        background: '#FAFBFC',
        color: theme.colors[intent],
        ':hover': {
          background: '#E1E2E6'
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
        color: theme.colors[intent],
        '&:hover': {
          background: '#EBECF0'
        }
      }
    }
  })}

  ${(props) => (
    props['aria-disabled'] && css`
      color: #6B778C;
      background: #EBECF0;

      &:hover {
        color: #6B778C;
        background: #EBECF0;
        cursor: not-allowed;
      }
    `
  )}

  ${({ circular }) => (
    circular && css`
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
    `
  )}

  ${space}
  ${layout}
`;
