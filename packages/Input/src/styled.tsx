import styled, { css } from 'styled-components';

import ErrorSVG from './assets/error.svg';
import WarningSVG from './assets/warning.svg';

import { Props } from '.';

export const WarningText = styled.p`
  font-size: 12px;
  margin: 4px 0 0 4px;
  color: ${({ theme }) => theme.orange.darkest};
  /* remove the width
    and padding of the
    waringng/error icon
  */
  width: calc(100% - 24px - 12px);
`;

export const ErrorText = styled(WarningText)`
  color: ${({ theme }) => theme.red.darker};
`;

export const WarningIcon = styled(WarningSVG)`
  fill: ${({ theme }) => theme.orange.standard};
`;

export const ErrorIcon = styled(ErrorSVG)`
  fill: ${({ theme }) => theme.red.standard};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  & > svg {
    min-width: 24px;
    min-height: 24px;
    padding-left: 8px;
  }
`;

type WrapProps = Pick<Props, 'fluid'>

export const Wrap = styled.div<WrapProps>`
  display: inline-flex;
  flex-direction: column;
  width: 320px;
  font-family: "Open Sans";

  ${({ fluid }) => (
    fluid && css`
      width: 100%;
    `
  )}
`;

type Label = Pick<Props, 'disabled'>

export const Label = styled.label<Label>`
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

type BaseInputProps = Pick<Props, 'warning' | 'error'>

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

  ${({ warning, theme }) => (
    warning && css`
      border: 2px solid ${theme.orange.standard} !important;
    `
  )}

  ${({ error, theme }) => (
    error && css`
      border: 2px solid ${theme.red.standard} !important;
    `
  )}
`;
