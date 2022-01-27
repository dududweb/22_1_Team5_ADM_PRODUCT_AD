import styled from 'styled-components';

export const Modal = styled.div`
  width: 400px;
  height: 150px;
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 20px 10px;
  margin: 0 auto;
  background-color: #fff;
  z-index: 99;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const CancelBtn = styled.button`
  padding: 10px 15px;
  margin-right: 20px;
  background-color: grey;
  border-radius: 5px;
  color: #fff;
`;

export const ConfirmBtn = styled.button`
  padding: 10px 15px;
  background-color: blue;
  border-radius: 5px;
  color: #fff;
`;

export const BodyBlackout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
`;
