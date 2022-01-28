import styled from 'styled-components';

export const Header = styled.div`
  width: calc(100vw - 200px);
  height: 68px;
  position: fixed;
  top: 0;
  left: 200px;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: red;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background-color: red;
  padding: 12px 18px;
  font-weight: 500;
`;
