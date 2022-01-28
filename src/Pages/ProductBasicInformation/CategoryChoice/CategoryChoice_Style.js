import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
`;
export const CategoryCheckbox = styled.div`
  flex: 6;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
  overflow: scroll;
`;
export const Index = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const ChoiceCategoryindex = styled.div`
  flex: 4;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  overflow: scroll;
`;
export const CategoryButton = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid purple;
  border-radius: 4px;
`;
export const ButtonName = styled.div`
  display: flex;
  justify-content: center;
  flex: 10;
  padding-left: 30px;
`;
export const DeleteButton = styled.button`
  display: flex;
  justify-content: end;
  flex: 1;
`;
