import styled from 'styled-components';

export const RadioBase = styled.div`
  display: inline-flex;
  flex-direction: column;

  font-family: 'IBM Plex Sans';
`;

export const Input = styled.input`
  position: absolute;
  clip: rect(1px,1px,1px,1px);
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
`;

export const InputLabel = styled.label<{checked?: boolean}>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ::before {
    content: '';
    display: inline-flex;
    box-sizing: border-box;
  
    width: 16px;
    height: 16px;
  
    border-radius: 50%;
    background: ${({ checked, theme }) => (checked ? theme.colors.info : '#FFFFFF')};
    border: 3px solid #FFFFFF;
    box-shadow: 0 0 0 2px #B3BAC5;

    margin-right: 16px;
  }

  &:nth-of-type(n + 2) {
    margin-top: 8px;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 500;

  margin-top: 0;
`;
