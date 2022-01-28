import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 0 30px;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 20px;
  border-radius: 15px;
  background: #9f9f9f;
  cursor: pointer;

  &::after {
    position: absolute;
    top: -5px;
    content: '';
    display: block;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 15px;

  &:checked + ${CheckBoxLabel} {
    background: #aea7e6;

    &::after {
      position: absolute;
      top: -5px;
      content: '';
      display: block;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background: #2a19be;
      margin-left: 25px;
      transition: 0.2s;
    }
  }
`;
