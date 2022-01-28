import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid lightgray;
  text-align: center;
  background-color: white;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid lightgray;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionAddBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  text-align: center;

  border: 1px solid;
  border-radius: 5px;
`;

export const DeleteBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
