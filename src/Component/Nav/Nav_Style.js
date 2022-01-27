import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  width: 200px;
  margin-bottom: 10px;
  background-color: white;
  font-size: 16px;
`;

export const Logo = styled.div`
  padding: 16px 16px;
  border-right: 1px solid lightgray;
`;

export const CategoryWrapper = styled.ul`
  background-color: white;
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

export const MainCategory = styled.li``;

export const SubCategory = styled.li`
  padding: 8px 3px;
`;
