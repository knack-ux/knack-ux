import styled, { css } from 'styled-components';

import { Props } from '.';

export const TimePickerBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: "Open Sans";
  color: ${({ theme }) => theme.text.default}
`;

export const Label = styled.label`
  padding-left: 4px;
  margin-bottom: 6px;

  font-family: "Cabin";
`;

export const Select = styled.select<Pick<Props, 'error'>>`
  display: flex;

  background-color: #FAFBFC;
  border-radius: 3px;
  border: 2px solid #E1E2E6;

  font-size: 16px;
  font-family: "IBM Plex Mono";

  height: 48px;
  box-sizing: border-box;
  padding: 12px 16px;
  
  transition-property: border, background-color;
  transition-duration: .35s;
  outline: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-overflow: '';

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
