import styled from 'styled-components';

export const AddTemplate = styled.div`
  width: 1100px;
  display: flex;
  border: 1px solid lightgray;
  border-top: none;
`;

export const SubTitleBox = styled.div`
  width: 200px;
  padding: 18px;
  font-size: 16px;
  background-color: #f5f5f5;
  border-right: 1px solid lightgray;

  &::last-child {
    border-bottom: 1px solid lightgray;
  }
`;

export const ContentsBox = styled.div`
  width: 100%;
  padding: 18px;
  font-size: 16px;
  background-color: white;
`;

export const WrapperTemplate = styled.div`
  width: 1100px;
  background-color: red;
`;
