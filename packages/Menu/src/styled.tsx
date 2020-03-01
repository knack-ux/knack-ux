import styled from 'styled-components';

export const MenuBase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  font-family: 'IBM Plex Sans';
`;

export const Divider = styled.hr`
  border: 1px solid #DFE1E6;
  margin: 8px 0;
`;

export const Title = styled.div`
  font-size: 12px;
  color: #5E6C84;

  padding: 8px;
`;

export * from './Item/styled';
