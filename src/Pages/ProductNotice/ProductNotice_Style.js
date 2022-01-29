import styled from 'styled-components';

export const InfoDetailBox = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  background-color: #fff;
  border-radius: 4px;
  padding: 50px;
`;

export const InfoTag = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const InputDataWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InputDataTitle = styled.div`
  font-size: 18px;
  padding-left: 20px;
`;

export const Input = styled.input`
  width: ${props => props.width}px;
  margin: ${props => props.margin}px;
  border: 1px solid #b4b4b4;
  padding: 14px;
  padding-bottom: 8px;
  border-radius: 5px;
`;

export const NewInputWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.div`
  padding: 5px;
  width: 60px;
  text-align: center;
  color: red;
  border: 1px solid;
  border-radius: 5px;
`;
