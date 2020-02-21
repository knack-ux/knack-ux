import styled, { css } from 'styled-components';
import { space, layout } from 'styled-system';

import { Props } from '.';

export const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  
  width: 320px;

  font-family: "Cabin";

  ${space}
  ${layout}
`;

export const Base = styled.input<BaseInputProps>`
  background-color: #FAFBFC;
  border-radius: 3px;
  border: 2px solid #E1E2E6;
  font-size: 16px;
  padding: 12px 16px;
  transition-property: border, background-color;
  transition-duration: .35s;
  outline: none;
  color: #172B4D;
  font-family: "Open Sans";
  width: 100%;

  ::placeholder {
    opacity: 1;
    color: #5E6C84;
  }

  :hover {
    border: 2px solid #C0C0D5;
  }

  :focus {
    background-color: white;
    border: 2px solid #3D428B;
  }

  :disabled {
    color: #7A869A;
    background-color: #DFE1E6;
    border: 2px solid #DFE1E6;
    cursor: not-allowed;
    
    ::placeholder {
      opacity: 0;
      color: #7A869A;
    }
  }

  ${({ error, theme }) => (
    error && css`
      border: 2px solid ${theme.colors.danger};
    `
  )}
`;

type LabelProps = Pick<Props, 'disabled'>

export const Label = styled.label<LabelProps>`
  align-self: flex-start;

  color: #172B4D;
  font-size: 16px;
  
  padding-left: 4px;
  margin-bottom: 6px;

  ${({ disabled }) => (
    disabled && css`
      color: #707780;
    `
  )}
`;

export const ErrorText = styled.div`
  font-size: 14px;
  margin: 4px 0 0 4px;
  color: ${({ theme }) => theme.colors.danger};
  /*
    remove the width
    and padding of the
    waringng/error icon
  */
  width: calc(100% - 24px - 12px);
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  & > i {
    min-width: 24px;
    min-height: 24px;
    padding-left: 8px;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

type BaseInputProps = Pick<Props, 'error'>
