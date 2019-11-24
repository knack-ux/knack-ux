import styled from 'styled-components';

export const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;

  font-family: 'Open Sans';
  color: #182C61;

  & > h3 {
    margin: 0 0 16px 0;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;

  & > div:nth-child(n + 2) {
    margin-top: 8px;
  }
`;
