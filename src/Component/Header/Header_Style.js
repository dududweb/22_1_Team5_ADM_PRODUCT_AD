import styled from 'styled-components';

export const Header = styled.div`
  width: calc(100vw - 200px);
  height: 68px;
  position: fixed;
  top: 0;
  left: 200px;
  background-color: white;
  z-index: 1;
`;

export const Container = styled.div`
  padding: 24px;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background-color: white;
  padding: 16px 18px;
  font-weight: 500;
`;
