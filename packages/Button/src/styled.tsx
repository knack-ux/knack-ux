import styled from 'styled-components';

export const Primary = styled.button`
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 600;
  background-color: #3C4290;
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 3px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: .3s;
  -webkit-font-smoothing: antialiased;

  :hover {
    background-color: #5F66D7;
  }

  :active {
    background-color: #21244B;
  }
`;

export const Secondary = styled(Primary)`
  padding: 8px 16px;
  font-size: 14px;
`;
