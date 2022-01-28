import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  font-size: 16px;
  border-right: 1px solid lightgray;
  background-color: white;
`;

export const Logo = styled.div`
  padding: 16px 16px;
`;

export const MainCategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;

  &:last-child {
    border-bottom: 1px solid lightgray;
  }
`;

export const CategoryWrapper = styled.ul`
  width: 200px;
`;

export const MainCategory = styled.li`
  /* width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid lightgray; */
`;

export const SubCategory = styled.li`
  padding: 8px 3px;
`;
