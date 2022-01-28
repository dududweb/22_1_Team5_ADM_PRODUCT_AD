import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const SalesPeriod = styled.div`
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
  color: red;
  font-size: 18px;
  font-weight: 700;
  margin-top: 100px;
`;
export const Exposureperiod = styled.div`
  padding-top: 30px;
`;

export const Wrap = styled.div``;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: gray;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: blue;
    }
  }
  ${props =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid blue;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: blue;
      }
    }
  `}
`;
